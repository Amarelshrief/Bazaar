import { facebookImg, githubImg, paymentLogo, youtubeImg } from "../assets";
import { UserRound, House, HandHelping, RussianRuble } from "lucide-react";

function Footer() {
  return (
    <div className="bg-black py-20 text-[#949494] font-bodyFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-6">
        <div className="">
          <div className="">
            <h2 className="text-white text-2xl mb-4 font-semibold">bazar</h2>
          </div>
          <p className="text-white text-xl tracking-wide">@ ReactBD.com</p>
          <div>
            <img src={paymentLogo} alt="PaymentLogo" />
          </div>
          <div className="flex gap-2">
            <div className="w-8 hover:cursor-pointer">
              <img src={githubImg} alt="githubImage" />
            </div>
            <div className="w-8 hover:cursor-pointer">
              <img src={facebookImg} alt="FacebookImg" />
            </div>
            <div className="w-8 hover:cursor-pointer">
              <img src={youtubeImg} alt="YoutubeImg" />
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-white text-2xl mb-4 font-semibold">Locate Us</h2>
          <div className="flex flex-col gap-2">
            <p>6 october st , Cairo-Egypt</p>
            <p>Mobile: 0312345</p>
            <p>Phone: 01012345678</p>
            <p>E-mail: bazar@gmail.com</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-white text-2xl mb-4 font-semibold">Profile</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center hover:text-gray-400 hover:cursor-pointer">
              <UserRound />
              <p className="pl-2">My account</p>
            </div>
            <div className="flex items-center hover:text-gray-400 hover:cursor-pointer">
              <RussianRuble />
              <p className="pl-2">checkout</p>
            </div>
            <div className="flex items-center hover:text-gray-400 hover:cursor-pointer">
              <House />
              <p className="pl-2">order tracking</p>
            </div>
            <div className="flex items-center hover:text-gray-400 hover:cursor-pointer">
              <HandHelping />
              <p className="pl-2">help & support</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            placeholder="e-mail"
            className="py-2 bg-black text-white border-[1px] border-gray-500 p-2"
          />
          <button className="border-[1px] border-gray-500 hover:bg-gray-800 transition">
            Subscripe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
