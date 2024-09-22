import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";

export interface Product {
  _id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  oldPrice: string;
  isNew: boolean;
  image: string;
}

interface Products {
  data: Product[];
}

function Home() {
  const data: Products = useLoaderData() as Products;
  // console.log(data.data);

  return (
    <div>
      <Banner />
      <Products products={data.data} />
    </div>
  );
}

export default Home;
