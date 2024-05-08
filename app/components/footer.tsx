import { Facebook, Instagram, TikTok } from "./icons";

export const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] py-[24px] md:py-[48px]">
      <div className="md:container w-[95%] mx-auto flex justify-between items-start md:flex-row flex-col md:gap-0 gap-[30px]">
        <div className="flex gap-[48px] md:gap-[110px] text-[#222] text-[12px] md:text-sm leading-[18px] md:order-1 order-2">
          <div className="flex flex-col gap-[6px]">
            <span>Contact</span>
            <span>About</span>
            <span>Community</span>
            <span>#sans Ambassadors</span>
            <span>Shop</span>
            <span>Gift Cards</span>
            <span>Coupons</span>
          </div>
          <div className="flex flex-col gap-[6px]">
            <span>Order History</span>
            <span>FAQs</span>
            <span>Shipping & Handling</span>
            <span>Refunds & Exchanges</span>
            <span>Terms & Conditions</span>
            <span>Press</span>
            <span>Accessibility & Statement</span>
          </div>
        </div>
        <div className="flex gap-[28px] items-center md:order-2 order-1">
          <Facebook />
          <TikTok />
          <Instagram />
        </div>
      </div>
      <div className="mt-[30px] md:mt-[40px] flex justify-start md:justify-center w-[95%] mx-auto">
        <span className="text-[#6D6D6D] leading-[18px] text-[10px] md:text-[14px]">
          © 2024 Sans. All Rights Reserved. Privacy Policy
        </span>
      </div>
    </div>
  );
};
