import { Link } from "react-router-dom";
import { blank, cart } from "../assets";
import { useAppSelector } from "../hooks/useAppSelector";
import { useState } from "react";

function Header() {
  const [navBar, setNavBar] = useState<boolean>(false);
  const userInfo: any = useAppSelector((state) => state.bazar.userInfo);
  const productData = useAppSelector((state) => state.bazar.productData);
  // console.log(userInfo);

  function makeItAppear() {
    setNavBar(!navBar);
  }

  return (
    <div className="w-full h-20 border-b-[1px] border-b-gray-900 font-bodyFont sticky top-0 z-50 bg-slate-100">
      <div className="mx-auto flex items-center justify-between md:max-w-screen-xl max-w-screen-md h-full">
        <Link to="/">
          <div className="w-32 cursor-pointer ">
            <h1 className="px-2 md:px-0 text-2xl mb-4 font-semibold pt-4">
              Bazaar
            </h1>
            {/* <img src={logoImg} alt="logo image" /> */}
          </div>
        </Link>
        <div className="flex items-center gap-4 ">
          {navBar ? (
            <div className="bg-slate-200 absolute right-0 top-14 w-52">
              <ul className="flex flex-col gap-2">
                <li className="py-2 hover:px-3 duration-200 px-1 cursor-pointertext-base text-black font-bold hover:text-orange-800 cursor-pointer decoration[1px]">
                  Home
                </li>
                <li className="py-2 hover:px-3 duration-200 px-1 cursor-pointer text-base text-black font-bold hover:text-orange-800 decoration[1px]">
                  Pages
                </li>
                <li className="py-2 hover:px-3 duration-200 px-1 cursor-pointer text-base text-black font-bold hover:text-orange-800 decoration[1px]">
                  Shop
                </li>
                <li className="py-2 hover:px-3 duration-200 px-1 cursor-pointer text-base text-black font-bold hover:text-orange-800 decoration[1px]">
                  Element
                </li>
                <li className="py-2 hover:px-3 duration-200 px-1 cursor-pointer text-base text-black font-bold hover:text-orange-800 decoration[1px]">
                  Blog
                </li>
              </ul>
            </div>
          ) : (
            <ul className="md:flex items-center gap-8 hidden">
              <Link to="/">
                <li className="text-base text-black font-bold hover:text-orange-800 cursor-pointer decoration[1px] duration-300">
                  Home
                </li>
              </Link>
              <li className="text-base text-black font-bold hover:text-orange-800 cursor-pointer decoration[1px] duration-300">
                Pages
              </li>
              <li className="text-base text-black font-bold hover:text-orange-800 cursor-pointer decoration[1px] duration-300">
                Shop
              </li>
              <li className="text-base text-black font-bold hover:text-orange-800 cursor-pointer decoration[1px] duration-300">
                Element
              </li>
              <li className="text-base text-black font-bold hover:text-orange-800 cursor-pointer decoration[1px] duration-300">
                Blog
              </li>
            </ul>
          )}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="flex items-center justify-end">
              <div className="relative">
                <img className="w-12" src={cart} alt="Cart" />
                <div className="cursor-pointer absolute top-4 left-3 text-sm w-6 flex justify-center items-center">
                  <span className="">{productData.length}</span>
                </div>
              </div>
            </Link>
            <Link to="/login" className="hidden md:flex">
              <div className="text-center text-white w-8 h-8">
                <img
                  src={userInfo ? userInfo.image : blank}
                  alt="user-image"
                  className="rounded-[50%]"
                />
              </div>
            </Link>
          </div>
          {userInfo && <p>{userInfo.name}</p>}

          <div
            onClick={makeItAppear}
            className="flex flex-col gap-1 md:hidden cursor-pointer px-2 items-center justify-between"
          >
            <span className="bg-black w-8 h-1"></span>
            <span className="bg-black w-8 h-1"></span>
            <span className="bg-black w-8 h-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
