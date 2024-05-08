import { Facebook, Instagram, TikTok } from "./icons";

export const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] py-[48px]">
      <div className="container mx-auto flex justify-between items-start">
        <div className="flex gap-[110px] text-[#222] text-sm leading-[18px]">
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
        <div className="flex gap-[28px] items-center">
          <Facebook />
          <TikTok />
          <Instagram />
        </div>
      </div>
      <div className="mt-[40px] flex justify-center">
        <span className="text-[#6D6D6D] leading-[18px]">
          © 2024 Sans. All Rights Reserved. Privacy Policy
        </span>
      </div>
    </div>
  );
};
