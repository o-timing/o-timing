import {ColumnDef} from "@tanstack/react-table"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {MoreHorizontal} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {Dialog, DialogTrigger} from "@/components/ui/dialog"
import {BrikkenummerDialog} from "@/lopere/BrikkenummerDialog.tsx";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Loper = {
    startnr: number | null,
    fornavn: string,
    etternavn: string,
    klubb: string,
    brikkenr: string,
    klasse: string,
    leiebrikke: boolean,
    id: number
}

export const columns: ColumnDef<Loper>[] = [
    {
        accessorKey: "startnr",
        header: "Startnummer"
    },
    {
        accessorKey: "fornavn",
        header: "Fornavn"
    },
    {
        accessorKey: "etternavn",
        header: "Etternavn"
    },
    {
        accessorKey: "klasse",
        header: "Klasse"
    },
    {
        accessorKey: "klubb",
        header: "Klubb"
    },
    {
        accessorKey: "brikkenr",
        header: () => <div className="text-left">Brikkenummer</div>,
        cell: ({row}) => {
            const payment = row.original
            const brikkenr: string = payment.brikkenr
            const leiebrikke = payment.leiebrikke

            return (
                <div className="text-left font-medium">{brikkenr}
                    {leiebrikke &&
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
            const loper = row.original

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
                    <BrikkenummerDialog loper={loper}/>
                </Dialog>
            )
        },
    },
]
