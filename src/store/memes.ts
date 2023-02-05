import { IMeme } from "@/models/memeData";
import { createContext } from "react";

interface IMemeStore {
    memes: IMeme[]
}

export const MemeContext = createContext<IMemeStore>({memes: []});
export const memeStore: IMemeStore = {
    memes: [],
};
