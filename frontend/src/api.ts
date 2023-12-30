import createClient from "openapi-fetch";
import {components, paths} from "./schema";

type Participant = components["schemas"]["Participant"];

const host = "localhost"
const port = "3000"

export const fetchAllParticipants: () => Promise<Participant[]> = async () => {
    const {GET} = createClient<paths>({baseUrl: `http://${host}:${port}/`});

    const {
        data, // only present if 2XX response
        error, // only present if 4XX or 5XX response
    } = await GET("/v1/participants", );

    if (error) {
        console.error(error);
        return [];
    }
    return data;
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


