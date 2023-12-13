"use client"

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {

    const router = useRouter()

    return ( 
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
            <div className="flex justify-center items-center">
            <FileSearch size={32} className="text-color-accent" />
            <h3 className="text-color-accent text-2xl">Not Found</h3>
            </div>
            <button onClick={() => router.back()} className="text-color-primary hover:text-color-accent transition-all underline">Kembali</button>
            </div>
        </div>
     );
}
 
export default NotFound;