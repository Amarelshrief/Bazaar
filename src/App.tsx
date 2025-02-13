import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { ProductsData } from "./api/Api";
import Product from "./components/ProductData";
import Login from "./Pages/Login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function Layout() {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        //paths for pages
        path: "/",
        element: <Home />,
        loader: ProductsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);
  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
