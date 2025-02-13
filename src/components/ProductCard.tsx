import { useNavigate } from "react-router-dom";
import { Product } from "../Pages/Home";
import { addToCart } from "../redux/bazarSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { ProductsData } from "../api/Api";
import { useQuery } from "@tanstack/react-query";

function ProductCard(props: Product) {
  const _id = props.title.toLowerCase().split(" ").join("");
  const { data, isPending } = useQuery({
    queryKey: ["product", _id],
    queryFn: ProductsData,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function showDetails() {
    navigate(`/product/${_id}`, {
      state: {
        product: props,
      },
    });
  }

  let content;

  if (isPending) {
    <div className="flex justify-center items-center">
      content = <p className="text-4xl font-bodyFont">Fetching the data ...</p>;
    </div>;
  }

  if (data) {
    content = (
      <div className="bg-yellow-50 shadow relative">
        <div onClick={showDetails} className="overflow-hidden w-full h-96">
          <img
            className="duration-300 w-full h-full object-cover hover:scale-110 cursor-pointer"
            src={props.image}
            alt="Products-Image"
          />
        </div>
        <div className="">
          <div className="flex justify-between items-center px-2">
            <div className="py-3">
              <h2 className="font-bold text-base">{props.title}</h2>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-500 line-through">${props.oldPrice}</p>
              <p className="font-semibold">${props.price}</p>
            </div>
          </div>
          {/* <div>
        <p className="absolute items-center gap-1 z-20 flex top-2 w-[100px] text-gray-500 hover:text-gray-800 hover:translate-x-52 transform translate-x-0 transition-transform duration-500 cursor-pointer">
          add to cart
        </p>
      </div> */}
        </div>
        <div className="flex justify-between items-center pb-4 px-2 py-4">
          <div className="">
            <p>{props.category}</p>
          </div>
          <div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    title: props.title,
                    category: props.category,
                    description: props.description,
                    quantity: 1,
                    image: props.image,
                    price: props.price,
                  })
                ) && toast.success(`${props.title} is added`)
              }
              className="bg-black text-white w-28 py-1 hover:bg-transparent duration-200 hover:text-gray-500"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="w-16 h-8 text-center absolute top-0 right-0">
          {props.isNew && (
            <p className="bg-black text-white font-semibold py-1 gap-2">Sale</p>
          )}
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

  return <>{content}</>;
}

export default ProductCard;
