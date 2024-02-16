import { CloudinaryImage } from '@/components/CloudinaryImage';
import UploadButton from '@/components/UploadButton';
import cloudinary from "cloudinary";

type SearchResult = {
    public_id: string
}

export default async function GalleryPage() {
    const results = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at','desc')
    .max_results(10)
    .execute() as {resources: SearchResult[]};
    
    return(
        <section>
            <div className="flex flex-col gap-8">
                <div className='flex justify-between'>
                    <h1 className="text-4xl font-bold">GALLERY</h1>
                    <UploadButton/>
                </div>
                <div className='grid grid-cols-4'>
                    {results.resources.map((result) => (
                        <CloudinaryImage
                            key={result.public_id}
                            src={result.public_id}
                            width="400"
                            height="300"
                            alt="an image of something"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}