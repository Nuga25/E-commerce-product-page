import { useState, useRef, useEffect } from "react";
import MobileNav from "./components/MobileNav";
import Modal from "./components/Modal";
import Header from "./components/Header";

function App() {
  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);

  // Close cart when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (event.key === "ArrowLeft") {
        handlePreviousImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, selectedImageIndex]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleImageSelect = (img: string, index: number) => {
    setSelectedImage(img);
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="lg:mx-[10%]">
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <header>
        <Header
          setIsMenuOpen={setIsMenuOpen}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          cartRef={cartRef}
          count={count}
          selectedImage={selectedImage}
          setCount={setCount}
        />
      </header>

      <main className="md:flex justify-center items-center md:py-[50px] md:px-[60px]">
        <section className="flex flex-col md:flex-row md:justify-between md:gap-16">
          <div className="flex-1">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Product preview"
                className="w-full h-80 object-cover md:rounded-lg md:h-[400px] cursor-pointer"
                onClick={openLightbox}
              />
              {/* Previous & Next button for mobile */}
              <button
                onClick={handlePreviousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 w-10 h-10 flex items-center justify-center md:hidden"
              >
                <img src="/images/icon-previous.svg" alt="previous image" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 w-10 h-10 flex items-center justify-center md:hidden"
              >
                <img src="/images/icon-next.svg" alt="next icon" />
              </button>
            </div>
            {/* Thumbnail Images */}
            <div className="hidden md:flex justify-between my-6 w-full md:w-[400px]">
              {images.map((img, index) => (
                <img
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={` w-[80px] h-[80px] cursor-pointer transition-transform duration-200 hover:opacity-70 rounded-lg  ${
                    selectedImage === img
                      ? "scale-110 opacity-70 border-2 border-[hsl(26,100%,55%)]"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 self-center p-6 md:p-0">
            <p className="text-[hsl(219,9%,45%)] text-[13px] font-medium">
              SNEAKER COMPANY
            </p>
            <h2 className="text-[hsl(220,13%,13%)] font-semibold text-[32px] my-[8px]">
              Fall Limited Edition Sneakers
            </h2>
            <p className="text-[hsl(219,9%,45%)] my-4">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they&apos;ll withstand
              everything the weather can offer.
            </p>
            <div className="flex md:flex-none md:flex-col md:items-start items-center justify-between">
              <div className="flex gap-2 items-center">
                <p className="text-[hsl(220,13%,13%)] text-[28px] font-semibold">
                  $125.00
                </p>
                <span className="bg-[hsl(220,13%,13%)] text-white text-[12px] font-normal py-[0.5px] px-2 rounded-md">
                  50%
                </span>
              </div>
              <p className="text-[hsl(219,9%,45%)] line-through font-semibold text-[16px] md:text-[12px]">
                $250.00
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-[hsl(220,13%,13%)] my-6">
              <div className="bg-[hsl(223,64%,98%)] flex items-center gap-8 p-3 rounded-lg font-semibold w-full justify-between">
                <img
                  src="/images/icon-minus.svg"
                  alt="decrement icon"
                  className="hover:bg-slate-200 rounded-sm cursor-pointer p-2"
                  onClick={() => count !== 0 && handleDecrement()}
                />
                <p className="w-4">{count}</p>
                <img
                  src="/images/icon-plus.svg"
                  alt="increment icon"
                  className="hover:bg-slate-200 rounded-sm cursor-pointer p-2"
                  onClick={handleIncrement}
                />
              </div>
              <button className="bg-[hsl(26,100%,55%)] flex justify-center items-center gap-2 font-semibold py-3 px-8 rounded-lg hover:bg-[hsl(26,100%,65%)] transition-colors w-full">
                <img src="/images/icon-cart.svg" alt="cart icon" />
                Add to cart
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <Modal
        isLightboxOpen={isLightboxOpen}
        closeLightbox={closeLightbox}
        selectedImage={selectedImage}
        images={images}
        selectedImageIndex={selectedImageIndex}
        handleImageSelect={handleImageSelect}
        handlePreviousImage={handlePreviousImage}
        handleNextImage={handleNextImage}
      />
    </div>
  );
}

export default App;
