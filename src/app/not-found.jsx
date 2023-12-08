"use client"

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
            <div className="flex justify-center items-center">
            <FileSearch size={32} className="text-color-accent" />
            <h3 className="text-color-accent text-2xl">Not Found</h3>
            </div>
            <Link href="/" className="text-color-primary hover:text-color-accent transition-all underline">Kembali</Link>
            </div>
        </div>
     );
}
 
export default NotFound;