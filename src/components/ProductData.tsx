import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

interface Product {
  _id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  oldPrice: string;
  isNew: boolean;
  image: string;
  rating: number;
}

// interface Details {
//   data: Product[];
// }

function ProductData() {
  let [changeNum, setChangeNum] = useState<number>(1);
  const location: Product = useLocation().state.product;
  const dispatch = useDispatch();

  // console.log(location.data);

  // useEffect(() => {
  // setDetails(location.state.product);
  // }, []);

  function plusNum() {
    setChangeNum(changeNum + 1);
    console.log(changeNum);
  }

  function minzeNum() {
    setChangeNum(changeNum === 1 ? (changeNum = 1) : changeNum - 1);
  }

  return (
    <div className="max-w-screen-xl mx-auto py-14 flex gap-10">
      <div className="relative">
        <img
          src={location.image}
          alt="product-image"
          className="h-[35rem] object-cover w-full"
        />
        <div className="w-16 h-8 text-center absolute top-0 right-0">
          {location.isNew}
          <p className="bg-black text-white font-semibold py-1 gap-2">Sale</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-4xl font-semibold">{location.title}</h2>
        <div className="flex gap-2">
          <p className="line-through text-gray-500 text-base">
            {location.oldPrice}
          </p>
          <p className="text-gray-800 font-medium text-2xl">{location.price}</p>
        </div>
        <div className="flex gap-2">
          <div className="flex">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <p className="text-gray-500 text-base">(1 Customer review)</p>
        </div>
        <p className="text-base text-gray-500 -mt-5">{location.description}</p>
        <div className="flex gap-4 ">
          <div className="border w-52 flex items-center justify-between gap-4 p-2 text-gray-500">
            <p>Quantity</p>
            <div className="flex gap-4">
              <button
                onClick={minzeNum}
                className="hover:text-white hover:bg-gray-600 duration-200 w-8 text-sm"
              >
                -
              </button>
              <span>{changeNum}</span>
              <button
                onClick={plusNum}
                className="hover:text-white hover:bg-gray-600 duration-200 w-8"
              >
                +
              </button>
            </div>
          </div>
          <div className="bg-black py-4 text-center w-32 text-white hover:scale-110 duration-200 cursor-pointer">
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: location._id,
                    title: location.title,
                    category: location.category,
                    description: location.description,
                    quantity: changeNum,
                    image: location.image,
                    price: location.price,
                  })
                ) && toast.success(`${location.title} is added`)
              }
              className="text-base font-semibold "
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="text-gray-500 pt-4">
          <p className="">Category: {location.category}</p>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default ProductData;
