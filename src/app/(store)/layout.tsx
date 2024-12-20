import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function StoreLayout ({ children }: { children: ReactNode }) {
    return <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Navbar/>
        { children }
        </div>
}