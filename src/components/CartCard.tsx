type Prop = {
  isCartOpen: boolean;
  count: number;
  selectedImage: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CartCard = ({ isCartOpen, count, selectedImage, setCount }: Prop) => {
  return (
    <div>
      {isCartOpen && (
        <div className="absolute top-14 right-24 w-72 bg-white rounded-lg shadow-xl">
          <p className="p-3 border-b border-b-slate-300 text-[hsl(220,13%,13%)] text-[12px] font-semibold">
            Cart
          </p>
          <div className="p-4 min-h-24">
            {count == 0 ? (
              <p className="text-center text-[hsl(221,9%,64%)] text-[12px] font-semibold">
                Your cart is empty.
              </p>
            ) : (
              <div className="p-2">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedImage}
                    alt="product preview"
                    className="w-8 h-8 rounded-sm"
                  />
                  <div>
                    <p className="text-[hsl(221,9%,64%)] text-[12px]">
                      Fall Limited Edition Sneakers
                    </p>
                    <div className="flex gap-2 items-center">
                      <p className="text-[hsl(221,9%,64%)] text-[12px]">
                        $125.00 x {count}
                      </p>
                      <span className="font-bold text-[hsl(220,13%,13%)] text-[12px]">
                        ${125 * count}
                      </span>
                    </div>
                  </div>
                  <img
                    src="/images/icon-delete.svg"
                    alt="delete icon"
                    className="w-3 h-4 cursor-pointer hover:opacity-70 "
                    onClick={() => setCount(0)}
                  />
                </div>
                <button className="w-full mt-4 font-bold text-[12px] bg-[hsl(26,100%,55%)] text-[hsl(220,13%,13%)] py-2 rounded-md hover:bg-[hsl(26,100%,55%,0.8)]">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCard;
