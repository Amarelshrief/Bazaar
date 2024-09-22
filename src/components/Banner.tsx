import { img1, img2, img3, img4 } from "../assets";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

function Banner() {
  const [currentImg, setCurrentImg] = useState(0);
  const data = [img1, img2, img3, img4];
  const reset = currentImg + 1;

  function prevImg() {
    setCurrentImg(currentImg === 0 ? 3 : (prev) => prev - 1);
  }

  function nextImg() {
    setCurrentImg(currentImg === 3 ? 0 : (prev) => prev + 1);
    // setCurrentImg(currentImg <= 3 ? (prev) => prev + 1 : (prev) => 0 / prev);
  }

  useEffect(() => {
    const nextImgInterval = setInterval(nextImg, 3000);
    return () => clearInterval(nextImgInterval);
  }, [reset]);

  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className="relative h-[250px] md:h-[650px]">
        <div
          style={{ transform: `translateX(-${currentImg * 100}vw)` }}
          className="flex w-[400vw] h-full transition-transform duration-1000"
        >
          <img
            src={data[0]}
            alt="ImgOne"
            className="object-cover w-screen h-full"
          />
          <img
            src={data[1]}
            alt="ImgTow"
            className="object-cover w-screen h-full"
          />
          <img
            src={data[2]}
            alt="ImgThree"
            className="object-cover w-screen h-full"
          />
          <img
            src={data[3]}
            alt="ImgFour"
            className="object-cover w-screen h-full"
          />
        </div>
        <div className="absolute left-0 right-0 bottom-40 flex justify-center items-center gap-24">
          <div className="border-[1px] border-gray-500 h-10 w-10 hover:cursor-pointer hover:bg-gray-500 transition hidden md:flex justify-center items-center">
            <ArrowLeft onClick={prevImg} size={22} />
          </div>
          <div className="border-[1px] border-gray-500 h-10 w-10 hover:cursor-pointer hover:bg-gray-500 transition hidden md:flex justify-center items-center">
            <ArrowRight onClick={nextImg} size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
