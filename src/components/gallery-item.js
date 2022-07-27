import React from 'react';
import { formatImageUrl } from "../utils";

export const GalleryItem = ({ image, selectImage }) => {
  return (
    <div className="gallery-grid-item" onClick={() => selectImage(image)}>
      <div className="backdrop">{ image.user.name }</div>
      <img src={formatImageUrl(image.url)} alt={image.description} />
    </div>
  )
}