export interface IMeme {
    box_count: number;
    captions: number;
    height: number;
    id: string;
    name: string;
    url: string;
    width: number;
}

export interface IMemeData {
    success: string;
    data: {
        memes: IMeme[];
    };
}
