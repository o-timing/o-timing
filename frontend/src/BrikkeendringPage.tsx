import './index.css';
import Sok from "@/Sok.tsx";
import {useEffect, useState} from "react";
import {fetchAllParticipants, searchLopere} from './api/api';
import {columns} from './lopere/columns';
import {DataTable} from "@/lopere/data-table.tsx";

import {components} from "./api/schema";

type Participant = components["schemas"]["Participant"];

function BrikkeendringPage() {
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [searchString, setSearchString] = useState<string>("");

    useEffect(() => {
        (async () => {
            if (searchString === '') {
                setParticipants(await fetchAllParticipants())
            } else {
                setParticipants(await searchLopere(searchString));
            }
        })()
    }, [searchString]);

    return (
        <div>
            <Sok searchString={searchString} setSearchString={setSearchString}/>

            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={participants}/>
            </div>
        </div>
    )
}

export default BrikkeendringPage;
