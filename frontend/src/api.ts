import { Loper } from "./lopere/columns";

const host = "localhost"
const port = "3000"

export const fetchAlleLopere: () => Promise<Loper[]> = async () => {
    try {
        const response = await fetch(`http://${host}:${port}/lopere`);
        const data = await response.json() as Loper[];
        return data;
    } catch (error) {
        console.error(error);
        return []
    }
};

export const searchLopere: (searchString: string) => Promise<Loper[]> = async (searchString: string) => {
    try {
        const response = await fetch(`http://${host}:${port}/lopere?q=${searchString}`);
        const data = await response.json() as Loper[];
        return data;
    } catch (error) {
        console.error(error);
        return []
    }
};


