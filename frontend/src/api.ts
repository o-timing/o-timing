const host = "localhost"
const port = "3000"

import {components} from "./schema";
type Participant = components["schemas"]["Participant"];

export const fetchAllParticipants: () => Promise<Participant[]> = async () => {
    try {
        const response = await fetch(`http://${host}:${port}/participants`);
        const data = await response.json() as Participant[];
        return data;
    } catch (error) {
        console.error(error);
        return []
    }
};

export const searchLopere: (searchString: string) => Promise<Participant[]> = async (searchString: string) => {
    try {
        const response = await fetch(`http://${host}:${port}/participants?q=${searchString}`);
        const data = await response.json() as Participant[];
        return data;
    } catch (error) {
        console.error(error);
        return []
    }
};


