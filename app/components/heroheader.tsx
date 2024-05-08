import Image from "next/image";

export const Header = () => {
  return (
    <div className="min-h-[100vh] w-full">
      <Image
        src="/assets/hero.png"
        alt=""
        layout="responsive"
        width={0}
        height={0}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        sizes="100vw"
        className="z-0"
      />
      <div className="absolute w-full h-full left-0 top-0">
        <div className="relative z-10">
          <div className="container mx-auto w-full h-full ">
            <div className="flex mt-[27.6%] flex-col">
              <h3 className="text-[#222] text-[50px]">New Series</h3>
              <p className="text-[30px] text-[#222]">
                Quick-drying sports undershirt
              </p>
              <div className="mt-[8px]">
                <button className="flex justify-center items-center min-h-[30px] w-[97px] border-none outline-none text-[16px] text-[#222] bg-[#D3E941] rounded-[30px]">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
