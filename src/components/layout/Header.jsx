import React from "react";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";
import message from "../../assets/images/message.png";
import { MoreHorizontal, Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full h-[80px] lg:h-[100px] px-4 lg:px-10 flex items-center justify-between">
      <div className="flex items-center gap-4 lg:gap-10">
        <img src={logo} alt="Techon" className="w-[120px] lg:w-[179px] h-auto object-contain" />
        <h1 className="hidden sm:block font-poppins font-bold text-[24px] lg:text-[34px] text-[#0a1445] leading-none">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3 lg:gap-6">
        <img src={message} alt="Message" className="w-[32px] lg:w-[42px]" />
        <div className="h-[25px] lg:h-[30px] w-[1px] bg-gray-400/30 mx-1 lg:mx-2"></div>
        <div className="flex items-center gap-2 lg:gap-4">
          <img src={profile} className="w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] rounded-full object-cover" alt="profile" />
          <div className="hidden lg:flex flex-col">
            <span className="font-poppins text-[#3b6cff] text-[16px] lg:text-[20px] font-medium leading-none">techon</span>
            <span className="font-poppins text-gray-600 text-[14px]">Admin</span>
          </div>
          <MoreHorizontal className="text-gray-400" size={20} />
        </div>
      </div>
    </div>
  );
}