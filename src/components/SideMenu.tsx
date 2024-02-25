import Link from "next/link";
import { Heart, FolderClosed, Image } from "lucide-react"
import { Button } from "./ui/button";

export default function SideMenu()  {
    return(
        <div className="pb-12 w-1/5">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Manage
                    </h2>
                    <div className="space-y-1">
                        <Button asChild variant="ghost" className="w-full justify-start flex gap-2">
                            <Link href='/gallery'>
                                <Image/>
                                Gallery
                            </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start flex gap-2">
                            <FolderClosed/>
                            Albums
                        </Button>
                        <Button asChild variant="ghost" className="w-full justify-start flex gap-2">
                            <Link href="/favorites">
                                <Heart/>         
                                Favorites
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}