"use client";

import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const maxColumns = 4;

export default function ImageGrid({images, getImage,}: {images: SearchResult[]; getImage: (imageData: SearchResult) => ReactNode}) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % maxColumns === colIndex);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map(getImage)}
          </div>
        )
      )}
    </div>
  );
}