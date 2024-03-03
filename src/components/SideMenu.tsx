import Link from "next/link";
import { Heart, FolderClosed, ImageIcon } from "lucide-react"
import { Button } from "./ui/button";
import { Folder } from "@/app/albums/page";
import cloudinary from 'cloudinary';

export default async function SideMenu()  {
    const {folders} = (await cloudinary.v2.api.root_folders()) as {
        folders: Folder[];
    };

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
                                <ImageIcon/>
                                Gallery
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" className="w-full justify-start flex gap-2">
                            <Link href='/albums'>
                                <FolderClosed/>
                                Albums
                            </Link>
                        </Button>
                        {folders.map((folder) => (
                            <Button asChild key={folder.name} variant='ghost' className="w-full justify-start flex gap-2">
                                <Link href={`/albums/${folder.path}`} className="pl-8">{folder.name}</Link>
                            </Button>
                        ))}
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