import { useEffect, useState } from "react";
import { cartImg } from "../assets";
import CartItems from "../components/CartItems";
import { useAppSelector } from "../hooks/useAppSelector";

function Cart() {
  const productData = useAppSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState<number>(0);

  useEffect(() => {
    let price: number = 0;
    productData.map((product) => {
      price += product.quantity * product.price;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  return (
    <div className="">
      <div>
        <img
          src={cartImg}
          alt="Cart-Img"
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="grid grid-cols-1 w-full max-w-sm sm:max-w-screen-xl mx-auto py-20 lg:flex">
        <CartItems />
        <div className="py-6 lg:w-1/3 px-4">
          <div>
            <h2 className="text-2xl font-bodyFont pb-4">Cart Totals</h2>
          </div>
          <div className="flex gap-4 pb-8 items-center">
            <p className="text-base text-gray-800">subtotal</p>
            <span className="font-bodyFont text-xl">${totalAmt}</span>
          </div>
          <div className="flex gap-4 items-start border-b-[1px] border-gray-600 pb-8">
            <p className="text-base text-gray-800">shipping</p>
            <p className="text-base text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum aperiam officiis maxime cumque? Iure.
            </p>
          </div>
          <div className="flex justify-between items-center pt-8">
            <p className="font-bodyFont text-base">total</p>
            <span className="font-bodyFont text-xl">${totalAmt}</span>
          </div>
          <div className="bg-black w-full text-white text-center mt-8 py-3 hover:bg-gray-800 duration-200 cursor-pointer">
            <button className="font-bodyFont text-xl text-center">
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
