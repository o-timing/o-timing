import 'whatwg-fetch'

import { Fetcher } from 'openapi-typescript-fetch'

import {components, paths} from "./schema";
import { Middleware } from 'openapi-typescript-fetch'

type Participant = components["schemas"]["Participant"];

const logger: Middleware = async (url, init, next) => {
    console.log(`fetching ${url}`)
    const response = await next(url, init)
    console.log(`fetched ${url}`)
    return response
}

const host = "localhost"
const port = "3000"

const fetcher = Fetcher.for<paths>()

// global configuration
fetcher.configure({
    baseUrl: `http://${host}:${port}`,
    // init: {
    //     headers: {
    //         ...
    //     },
    // },
    use: [logger] // middlewares
})

export const fetchAllParticipants = fetcher.path('/v1/participants').method('get').create()

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


