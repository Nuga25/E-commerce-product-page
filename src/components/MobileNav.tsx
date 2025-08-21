type MobileNavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNav({ isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 p-6 z-30 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform-none" : "-translate-x-full"
        }`}
      >
        <button onClick={() => setIsMenuOpen(false)} className="mb-8">
          <img src="/images/icon-close.svg" alt="close menu" />
        </button>
        <nav>
          <ul className="flex flex-col gap-5 font-bold text-lg">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileNav;
