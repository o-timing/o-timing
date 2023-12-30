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
import {toast} from "sonner"

import {components} from "../schema";

type Participant = components["schemas"]["Participant"];

const formSchema = z.object({
    ecard: z.string()
        .min(6)
        .max(7)
        .refine(value => /^\d+$/.test(value),
            {message: 'Brikkenummer kan kun inneholde tall'})
})

type Props = {
    participant: Participant
}

export function BrikkenummerDialog({participant}: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ecard: participant.ecard,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (participant.ecard === values.ecard) {
            toast(
                <div>
                    <div>Allerede lagret</div>
                    <div>{participant.firstname} {participant.lastname} / {participant.team} / {participant.class}</div>
                    <div>med brikkenummer {values.ecard}</div>
                </div>)
        } else {
            toast(
                <div>
                    <div>Lagret</div>
                    <div>{participant.firstname} {participant.lastname} / {participant.team} / {participant.class}</div>
                    <div>med brikkenummer {values.ecard}</div>
                </div>)
            // TODO lagre
        }

        console.log(values)
    }

    return (
        <DialogContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <DialogHeader>
                        <DialogTitle>Endre brikkenummer</DialogTitle>
                        <DialogDescription>
                            <div className="grid grid-cols-3 gap-4">
                                <div>Startnummer</div>
                                <div className="col-span-2">{participant.startno}</div>
                                <div>Fornavn</div>
                                <div className="col-span-2">{participant.firstname}</div>
                                <div>Etternavn</div>
                                <div className="col-span-2">{participant.lastname}</div>
                                <div>Klasse</div>
                                <div className="col-span-2">{participant.class}</div>
                                <div>Klubb</div>
                                <div className="col-span-2">{participant.team}</div>
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

