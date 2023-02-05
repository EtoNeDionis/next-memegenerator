import { IMemeData } from "@/models/memeData";
import axios from "axios";

export class Memes {
    static async getMemes() {
        const res = await axios.get<IMemeData>(
            "https://api.imgflip.com/get_memes"
        );
        const data = res.data.data;
        return data;
    }
}
