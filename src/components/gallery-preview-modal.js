import React from 'react';
import { formatImageUrl } from "../utils";

export const GalleryPreviewModal = ({ image, setSelectedImage }) => {
  const { url, description } = image;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="text-right pointer d-inline" onClick={() => setSelectedImage(null)}>
            X
          </div>
        </div>
        <div className="modal-body">
          <img src={formatImageUrl(url)} alt="description" />
          {description || ''}
        </div>
      </div>
    </div>
  )
}