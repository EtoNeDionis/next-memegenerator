import Layout from "@/components/Layout";
import { IMeme } from "@/models/memeData";
import { MemeContext } from "@/store/memes";
import { useRouter } from "next/router";
import {
    MutableRefObject,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import Image from "next/image";
import { Memes } from "@/api/memes";
import { Button, Spinner } from "react-bootstrap";
import TextField from "@/components/TextField";
import exportAsImage from "@/assets/exportAsImage";

const MemePage = () => {
    const { query } = useRouter();
    let { memes } = useContext(MemeContext);
    const [meme, setMeme] = useState<IMeme>();
    const [countTextFields, setCountTextFields] = useState<number>(0);
    const memeRef = useRef() as MutableRefObject<HTMLImageElement>;

    useEffect(() => {
        if (memes.length !== 0)
            return setMeme(memes.find((meme) => meme.id === query.id));

        async function fetchMemes() {
            const data = await Memes.getMemes();
            memes = data.memes;
            setMeme(memes.find((meme) => meme.id === query.id));
        }
        fetchMemes();
    }, [memes, query.id]);

    const addText = () => {
        setCountTextFields((prev) => prev + 1);
    };

    const Loader = (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );

    if (!meme)
        return (
            <Layout>
                <main className="bg-dark d-flex align-items-center justify-content-center min-vh-100 text-white">
                    {Loader}
                </main>
            </Layout>
        );
    return (
        <Layout>
            <main className="bg-dark min-vh-100 text-white">
                <div
                 className="overflow-hidden " style={{ width: `fit-content`, height: "auto" }} 
                 ref={memeRef}>
                    <Image
                        width={400}
                        height={500}
                        src={meme.url}
                        alt={meme.name}
                        style={{ width: "100%", height: "auto" }}
                    />

                    {Array(countTextFields)
                        .fill(0)
                        .map((textField, index) => (
                            <TextField key={index} />
                        ))}
                </div>

                <Button onClick={addText}>Add Text</Button>
                <Button
                    variant="success"
                    onClick={() =>
                        exportAsImage(memeRef.current, "Meme Generated On ...")
                    }
                >
                    Save
                </Button>
            </main>
        </Layout>
    );
};

export default MemePage;
