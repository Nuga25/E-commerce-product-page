import CartCard from "./CartCard";

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartRef: React.RefObject<HTMLDivElement | null>;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  selectedImage: string;
};

const Header = ({
  setIsMenuOpen,
  isCartOpen,
  setIsCartOpen,
  cartRef,
  cartCount,
  setCartCount,
  selectedImage,
}: Props) => {
  return (
    <header className="flex gap-10 items-center border-b border-b-[hsl(220,14%,75%)] h-16 px-2 md:px-0 justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/images/icon-menu.svg"
          alt="hamburger menu"
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
        />
        <img src="/images/logo.svg" alt="Sneaker Company Logo" />
      </div>
      <nav className="flex-1 h-full md:block hidden">
        <ul className="flex gap-6 text-[hsl(219,9%,45%)] text-[14px] h-full">
          <li className="h-full flex items-center transition-all duration-200 hover:border-b-2 hover:border-b-[hsl(26,100%,55%)]">
            <a href="#">Collections</a>
          </li>
          <li className="h-full flex items-center transition-all duration-200 hover:border-b-2 hover:border-b-[hsl(26,100%,55%)]">
            <a href="#">Men</a>
          </li>
          <li className="h-full flex items-center transition-all duration-200 hover:border-b-2 hover:border-b-[hsl(26,100%,55%)]">
            <a href="#">Women</a>
          </li>
          <li className="h-full flex items-center transition-all duration-200 hover:border-b-2 hover:border-b-[hsl(26,100%,55%)]">
            <a href="#">About</a>
          </li>
          <li className="h-full flex items-center transition-all duration-200 hover:border-b-2 hover:border-b-[hsl(26,100%,55%)]">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-6 items-center" ref={cartRef}>
        <div className="relative">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative"
          >
            <img
              src="/images/icon-cart.svg"
              alt="cart icon"
              className="w-[30px] h-[30px] hover:scale-110 p-1 rounded-md cursor-pointer"
            />
          </button>
          <p className="absolute top-0 right-[-5px] bg-[hsl(26,100%,55%)] text-white text-[7px] font-semibold py-[.5px] px-2 rounded-full">
            {cartCount}
          </p>
        </div>
        <img
          src="/images/image-avatar.png"
          alt="user avatar"
          className="w-[45px] h-[45px] hover:border-2 hover:border-[hsl(26,100%,55%)] rounded-full cursor-pointer"
        />
        {/* cart dropdown */}
        <CartCard
          isCartOpen={isCartOpen}
          cartCount={cartCount}
          selectedImage={selectedImage}
          setCartCount={setCartCount}
        />
      </div>
    </header>
  );
};

export default Header;
