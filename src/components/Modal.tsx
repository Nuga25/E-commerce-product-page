type Props = {
  isLightboxOpen: boolean;
  closeLightbox: () => void;
  selectedImage: string;
  images: string[];
  selectedImageIndex: number;
  handleImageSelect: (img: string, index: number) => void;
  handlePreviousImage: () => void;
  handleNextImage: () => void;
};

const Modal = ({
  isLightboxOpen,
  closeLightbox,
  selectedImage,
  images,
  selectedImageIndex,
  handleImageSelect,
  handlePreviousImage,
  handleNextImage,
}: Props) => {
  return (
    <div>
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-2xl mx-4">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white hover:text-[hsl(26,100%,55%)] transition-colors z-10"
            >
              <img src="/images/icon-close.svg" alt="close icon" />
            </button>

            {/* Previous button */}
            <button
              onClick={handlePreviousImage}
              className="absolute left-[-28px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 transition-colors shadow-lg z-10"
            >
              <img src="/images/icon-previous.svg" alt="previous image" />
            </button>

            {/* Next button */}
            <button
              onClick={handleNextImage}
              className="absolute right-[-28px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 transition-colors shadow-lg z-10"
            >
              <img src="/images/icon-next.svg" alt="next icon" />
            </button>

            {/* Main lightbox image */}
            <div>
              <img
                src={selectedImage}
                alt="Product preview"
                className="w-full h-96 object-cover rounded-lg mb-6"
              />

              {/* Lightbox thumbnails */}
              <div className="flex justify-center gap-4">
                {images.map((img, index) => (
                  <img
                    key={index}
                    onClick={() => handleImageSelect(img, index)}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-16 object-cover cursor-pointer transition-all duration-200 hover:opacity-70 rounded-lg ${
                      selectedImageIndex === index
                        ? "opacity-70 border-2 border-[hsl(26,100%,55%)] scale-105"
                        : "opacity-100"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
