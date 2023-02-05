import { Memes } from "@/api/memes";
import Layout from "@/components/Layout";
import MemeCard from "@/components/MemeCard";
import { IMeme } from "@/models/memeData";
import { MemeContext, memeStore } from "@/store/memes";
import { useContext, useEffect } from "react";

export const getStaticProps = async () => {
    const data = await Memes.getMemes();
    const memes = data.memes;

    return {
        props: {
            memes,
        },
    };
};

export default function Home({ memes }: { memes: IMeme[] }) {
 
    const value= useContext(MemeContext)
    useEffect(() => {
        value.memes = memes;
    });

    return (
        <Layout>
            <main className="bg-dark min-vh-100 text-white">
                <section className="p-5 text-center">
                    <h1 className="mb-3">Meme Generator</h1>
                </section>
                <section className="container">
                    <div className="row gy-5">
                        {memes.map((meme) => (
                            <div key={meme.id} className="col gx-1 d-flex justify-content-center">
                                <MemeCard
                                    id={meme.id}
                                    imageUrl={meme.url}
                                    name={meme.name}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
}
