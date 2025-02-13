import axios from "axios";

export async function ProductsData() {
  const data = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  // console.log(data);

  // const error = new Error("An error occurred while fetching the events");
  return data.data;
}
