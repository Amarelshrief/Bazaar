import axios from "axios";

export async function ProductsData() {
  return await axios.get("https://fakestoreapiserver.reactbd.com/products");
}
