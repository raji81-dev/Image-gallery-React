import React, { useState } from 'react';
import './style.css'; // For styling

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    'https://picsum.photos/id/12/200/300',
    'https://picsum.photos/id/13/200/300',
    'https://picsum.photos/id/14/200/300',
    'https://picsum.photos/id/15/200/300',
    'https://picsum.photos/id/16/200/300',
    'https://picsum.photos/id/17/200/300',
    'https://picsum.photos/id/18/200/300',
    'https://picsum.photos/id/19/200/300'
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setIsOpen(false);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Beautiful Image Gallery</h1>

      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Full-size" className="full-image" />
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

