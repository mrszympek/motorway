import React, { useState } from 'react';
import { GalleryItem } from "./gallery-item"
import { GalleryPreviewModal } from "./gallery-preview-modal"

export const Gallery = ({ images }) => {
  // const [isModalVisible, setModalVisibility] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="gallery-grid">
      {
        images.map(image => (
          <GalleryItem image={image} key={image.id} selectImage={setSelectedImage} />
        ))
      }

      {
        selectedImage && <GalleryPreviewModal image={selectedImage} setSelectedImage={setSelectedImage} />
      }
    </div>
  )
}