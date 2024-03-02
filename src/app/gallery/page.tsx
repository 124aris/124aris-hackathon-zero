import GalleryGrid from '@/components/GalleryGrid';
import SearchForm from '@/components/SearchForm';
import UploadButton from '@/components/UploadButton';
import cloudinary from "cloudinary";

export type SearchResult = {
    public_id: string;
    tags: string[];
};

export default async function GalleryPage({searchParams: {search}}: {searchParams: {search: string}}) {
    const results = await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}`: ''}`)
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(30)
    .execute() as {resources: SearchResult[]};

    
    return(
        <section>
            <div className="flex flex-col gap-8">
                <div className='flex justify-between'>
                    <h1 className="text-4xl font-bold">GALLERY</h1>
                    <UploadButton/>
                </div>
                <SearchForm initialSearch={search}/>
                <GalleryGrid images={results.resources}/>
            </div>
        </section>
    )
}