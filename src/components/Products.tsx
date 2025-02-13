import ProductsCard from "./ProductCard";
import { Product } from "../Pages/Home";
import { useQuery } from "@tanstack/react-query";
import { ProductsData } from "../api/Api";

function Products() {
  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: ProductsData,
  });

  let content;

  if (isPending) {
    content = <p className="text-4xl font-bodyFont">Fetching the data ...</p>;
  }

  if (data) {
    content = (
      <div className="max-w-sm md:max-w-screen-sm lg:max-w-screen-xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {data.map((product: Product) => (
          <ProductsCard key={product._id} {...product} />
        ))}
      </div>
    );
  }
  // console.log(content);

  return (
    <div className="py-12">
      <div className="flex flex-col gap-4 items-center mx-auto">
        <h1 className="bg-black text-white text-2xl w-80 py-2 text-center">
          Shopping everyday
        </h1>
        <span className="bg-black w-20 h-[3px]"></span>
        <p className="text-center max-w-[700px] text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, at
          corrupti cum voluptatum eum repudiandae quod quos. Mollitia inventore
          rem vero, unde ullam, cumque voluptate quo nesciunt, sunt modi vitae.
        </p>
      </div>
      {content}
    </div>
  );
}

export default Products;
