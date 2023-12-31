import 'whatwg-fetch'

import {Fetcher, Middleware} from 'openapi-typescript-fetch'

import {components, paths} from "./schema";

type Participant = components["schemas"]["Participant"];

// @ts-ignore
const logger: Middleware = async (url, init, next) => {
    console.log(`fetching ${url}`)
    const response = await next(url, init)
    console.log(`fetched ${url}`)
    return response
}

const fetcher = Fetcher.for<paths>()

// global configuration
fetcher.configure({
    baseUrl: `http://${import.meta.env.VITE_BACKEND_HOST}:${import.meta.env.VITE_BACKEND_PORT}`,
    init: {
        headers: {
            "Accept": "application/json"
        },
    },
    // use: [logger] // middlewares
})

export const fetchAllParticipants = fetcher.path('/v1/participants').method('get').create()

export const searchLopere: (searchString: string) => Promise<Participant[]> = async (searchString: string) => {
    try {
        const response = await fetch(`http://${import.meta.env.VITE_BACKEND_HOST}:${import.meta.env.VITE_BACKEND_PORT}?q=${searchString}`);
        const data = await response.json() as Participant[];
        return data;
    } catch (error) {
        console.error(error);
        return []
    }
};


