import {ColumnDef} from "@tanstack/react-table"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {MoreHorizontal} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {Dialog, DialogTrigger} from "@/components/ui/dialog"
import {BrikkenummerDialog} from "@/lopere/BrikkenummerDialog.tsx";

import {components} from "../api/schema";
type Participant = components["schemas"]["Participant"];

export const columns: ColumnDef<Participant>[] = [
    {
        accessorKey: "startno",
        header: "Startnummer"
    },
    {
        accessorKey: "firstname",
        header: "Fornavn"
    },
    {
        accessorKey: "lastname",
        header: "Etternavn"
    },
    {
        accessorKey: "team",
        header: "Klubb"
    },
    {
        accessorKey: "class",
        header: "Klasse"
    },
    {
        accessorKey: "ecard",
        header: () => <div className="text-left">Brikkenummer</div>,
        cell: ({row}) => {
            const participant = row.original
            return (
                <div className="text-left font-medium">{participant.ecard}
                    {participant.rentalEcard &&
                        <Badge className="bg-cyan-100 mx-2" variant="outline">Leiebrikke</Badge>
                    }
                </div>
            );
        },
    },
    {
        id: "actions",
        cell: ({row}) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const participant = row.original

            return (
                <Dialog>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DialogTrigger asChild>
                                <DropdownMenuItem>Endre brikkenummer</DropdownMenuItem>
                            </DialogTrigger>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <BrikkenummerDialog participant={participant}/>
                </Dialog>
            )
        },
    },
]
