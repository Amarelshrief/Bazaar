import { useAppSelector } from "../hooks/useAppSelector";
import { CircleX, ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  deleteCart,
  incrementQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

function CartItems() {
  const dispatch = useDispatch();

  const productData = useAppSelector((state) => state.bazar.productData);

  return (
    <div className="lg:w-2/3 pr-16">
      <div>
        <h2 className="text-2xl font-bodyFont pb-4">shopping cart</h2>
      </div>
      <div className="">
        {productData.map((product) => (
          <div
            key={product._id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-6"
          >
            <div className="flex flex-row-reverse sm:flex-row justify-end sm:justify-start items-center gap-6">
              <CircleX
                onClick={() =>
                  dispatch(deleteCart(product._id)) &&
                  toast.error(`${product.title} is removed`)
                }
                className="text-gray-500 text-xl hover:text-orange-800 duration-150 cursor-pointer"
              />
              <img
                src={product.image}
                alt="product-img"
                className="w-32 h-32 object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <h2 className="w-52 flex items-center">{product.title}</h2>
              <p className="w-10 flex items-center">${product.price}</p>
              <div className="border w-52 h-12 flex items-center justify-between gap-5 p-2 text-gray-500">
                <p>Quantity</p>
                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          _id: product._id,
                          title: product.title,
                          category: product.category,
                          description: product.description,
                          quantity: product.quantity,
                          image: product.image,
                          price: product.price,
                        })
                      )
                    }
                    className="hover:text-white hover:bg-gray-600 duration-200 w-8 text-sm"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          _id: product._id,
                          title: product.title,
                          category: product.category,
                          description: product.description,
                          quantity: product.quantity,
                          image: product.image,
                          price: product.price,
                        })
                      )
                    }
                    className="hover:text-white hover:bg-gray-600 duration-200 w-8"
                  >
                    +
                  </button>
                </div>
                <p className="w-12 flex items-center">
                  ${product.quantity * product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <button
          onClick={() =>
            dispatch(resetCart()) && toast.error("Your cart is empty")
          }
          className="bg-red-500 text-white text-center mt-8 ml-12 hover:bg-red-800 duration-150 py-2 px-6"
        >
          Reset Cart
        </button>
      </div>
      <Link
        to="/"
        className="mt-8 ml-11 flex items-center gap-2 text-gray-500 hover:text-black duration-150"
      >
        <ArrowLeft />
        go to shopping
      </Link>
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

export default CartItems;
