"use client"

import { CldImage, CldImageProps } from "next-cloudinary"
import setAsFavoriteAction from "./Actions"
import { useState, useTransition } from "react"
import { SearchResult } from "@/app/gallery/page"
import ImageMenu from "./ImageMenu"
import { Heart } from "lucide-react"

export function CloudinaryImage(props: {imageData: SearchResult; onUnheart?: (unheartedResource: SearchResult)=>void} & Omit<CldImageProps, 'src'>) {
    const [transition, startTransition] = useTransition();
    const {imageData, onUnheart} = props;
    const [isFavorited, setIsFavorited] = useState(imageData.tags.includes('favorite'))


    return(
        <div className="relative">
            <CldImage {...props} src={imageData.public_id}/>
            {isFavorited ?
                <Heart
                    fill="red"
                    onClick={() => {
                        onUnheart?.(imageData);
                        setIsFavorited(false);
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, false);
                        });
                    }}
                    className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
                />
                :        
                <Heart
                    onClick={() => {
                        setIsFavorited(true);
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, true);
                        });
                    }}
                    className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
                />
            }
            <ImageMenu/>
        </div>
    )
}