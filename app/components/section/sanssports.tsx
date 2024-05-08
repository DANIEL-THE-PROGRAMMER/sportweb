
import Image from "next/image";

export const SansSports = () => {
    return (
      <div className="flex flex-col items-center pt-[47px] pb-[89px]">
        <div className="flex flex-col items-center">
          <h3 className="text-[20px] md:text-[42px] text-[#222]">
            @ SansSports
          </h3>
          <p className="mt-[10px] mb-[14px] md:mb-[30px] text-[#6D6D6D] leading-[40px] text-[16px] md:text-[30px] text-center">
            Maybe you are the NEXT ambassadors.
          </p>
          <span className="text-[16px] md:text-[20px] leading-[36px] underline linkclip uppercase">
            Learn More
          </span>
        </div>
        <div className="container mx-auto gap-[12px] md:gap-[40px] mt-[40px] flex overflow-auto">
          <div className="grow h-[187px] w-[230px] md:w-auto md:h-[300px] shrink-0 relative">
            <Image src="/assets/image 17.png" alt="" fill sizes="100vw" />
          </div>
          <div className="grow h-[187px] w-[230px] md:w-auto md:h-[300px] shrink-0 relative">
            <Image src="/assets/image 18.png" alt="" fill sizes="100vw" />
          </div>
          <div className="grow h-[187px] w-[230px] md:w-auto md:h-[300px] shrink-0 relative">
            <Image src="/assets/image 19.png" alt="" fill sizes="100vw" />
          </div>
        </div>
      </div>
    );
}