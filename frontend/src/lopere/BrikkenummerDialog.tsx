import '../index.css';

import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog.tsx";
import {Loper} from "@/lopere/columns.tsx";
import {toast} from "sonner"

const formSchema = z.object({
    brikkenr: z.string()
        .min(6)
        .max(7)
        .refine(value => /^\d+$/.test(value),
            {message: 'Brikkenummer kan kun inneholde tall'})
})

type Props = {
    loper: Loper
}

export function BrikkenummerDialog({loper}: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            brikkenr: loper.brikkenr,
        },
    })

    function createOnSubmit(loper: Loper) {
        return (values: z.infer<typeof formSchema>) => {

            // TODO: sjekk om brikkenr er endret.
            // Hvis det ikke er endret så gi en beskjed om at det ikke er endret og ikke lagre
            // Hvis brikkenr er endret så gi en beskjed om hva det er endret til og lagre

            toast(
                <div>
                    <div>Lagret</div>
                    <div>{loper.fornavn} {loper.etternavn} / {loper.klubb} / {loper.klasse}</div>
                    <div>med brikkenummer {values.brikkenr}</div>
                </div>)

            console.log(values)
        }
    }

    return (
        <DialogContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(createOnSubmit(loper))} className="space-y-8">
                    <DialogHeader>
                        <DialogTitle>Endre brikkenummer</DialogTitle>
                        <DialogDescription>
                            <div className="grid grid-cols-3 gap-4">
                                <div>Startnummer</div>
                                <div className="col-span-2">{loper.startnr}</div>
                                <div>Fornavn</div>
                                <div className="col-span-2">{loper.fornavn}</div>
                                <div>Etternavn</div>
                                <div className="col-span-2">{loper.etternavn}</div>
                                <div>Klasse</div>
                                <div className="col-span-2">{loper.klasse}</div>
                                <div>Klubb</div>
                                <div className="col-span-2">{loper.klubb}</div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>

                    <FormField
                        control={form.control}
                        name="brikkenr"
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel>Brikkenummer</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            );
                        }
                        }
                    />

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">Avbryt</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit">Lagre</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>

    )
}

