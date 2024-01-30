"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogFooter,
	DialogTitle,
} from "@/components/ui/dialog"


const fromSchema = z.object({
	name : z.string().min(1, {
		message: "Server name is"
	})
})
export const InitialModal = () => {

	const form = useForm({
		defaultValues:{
			name :"",
			imageUrl : "",
		}
	});

	return (
		<Dialog open>
			<DialogContent className="bg-white text-black p-0 overflow-hidden">
				<DialogHeader className="pt-8 px-6">
					<DialogTitle className="text-2xl text-center font-bold">
						Customize your server
					</DialogTitle>
					<DialogDescription className="text-zinc-500 text-center">
						Give your server a personality with a name and an image.You can always change it later
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
 
