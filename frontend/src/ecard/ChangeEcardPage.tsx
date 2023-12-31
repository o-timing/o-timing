import '../index.css';
import Search from "./Search";
import {useEffect, useState} from "react";
import {fetchAllParticipants, searchLopere} from '../api/api';
import {columns} from '@/ecard/columns';
import {DataTable} from "@/ecard/data-table.tsx";

import {components} from "../api/schema";

type Participant = components["schemas"]["Participant"];

function ChangeEcardPage() {
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [searchString, setSearchString] = useState<string>("");

    useEffect(() => {
        (async () => {
            if (searchString === '') {
                const {data: participants} = await fetchAllParticipants({});

                participants.sort((a, b) => (a.firstname, a.lastname).localeCompare((b.firstname, b.lastname)))
                setParticipants(participants)
            } else {
                setParticipants(await searchLopere(searchString));
            }
        })()
    }, [searchString]);

    return (
        <div>
            <Search searchString={searchString} setSearchString={setSearchString}/>

            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={participants}/>
            </div>
        </div>
    )
}

export default ChangeEcardPage;
