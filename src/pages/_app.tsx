import { MemeContext, memeStore } from "@/store/memes";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MemeContext.Provider value={memeStore}>
            <Component {...pageProps} />
        </MemeContext.Provider>
    );
}
