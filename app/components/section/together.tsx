import Image from "next/image"
import { IconT } from "../icons"


export const Together = () => {
    return (
      <div className="h-[323px] md:min-h-[80vh] relative">
        <Image
          src="/assets/image 12.png"
          alt=""
          fill
          sizes="100vw"
          className="z-0"
        />
        <div className="absolute w-full h-full z-10">
          <div className="flex w-full h-full justify-center items-center">
            <div className="flex items-end">
              <span className="text-[16px] md:text-[56.135px] md:leading-[67.362px] text-white">
                Let{"'"}s
              </span>
              <div className="flex items-center px-[26px]">
                <IconT />
              </div>
              <span className="text-[16px] md:text-[56.135px] md:leading-[67.362px] text-white">
                together
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}