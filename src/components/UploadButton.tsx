"use client"

import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { Upload } from "lucide-react"

export default function UploadButton() {
    const router = useRouter();

    return(
        <Button asChild>
            <CldUploadButton
                onUpload={(result: any) => {
                    setTimeout(() => {
                        router.refresh();
                    }, 1000);
                }}
                uploadPreset="hackathon-zero"
            >
                <div className='flex gap-2 items-center'>
                    <Upload/>
                    Upload
                </div>
            </CldUploadButton>
        </Button>
    )
}