import './index.css';
import Sok from "@/Sok.tsx";
import React, {useEffect, useState} from "react";
import {fetchAlleLopere, searchLopere} from './api';
import {columns, Loper} from './lopere/columns';
import {DataTable} from "@/lopere/data-table.tsx";

function BrikkeendringPage() {
    const [lopere, setLopere] = useState<Loper[]>([]);
    const [searchString, setSearchString] = useState<string>("");

    useEffect(() => {
        (async () => {
            if (searchString === '') {
                const lopere = await fetchAlleLopere();
                setLopere(lopere)
            } else {
                const lopere = await searchLopere(searchString);
                setLopere(lopere);
            }
        })()
    }, [searchString]);

    return (
        <div>
            <Sok searchString={searchString} setSearchString={setSearchString}/>

            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={lopere}/>
            </div>
        </div>
    )
}

export default BrikkeendringPage;
