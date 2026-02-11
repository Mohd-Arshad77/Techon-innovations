import React from "react";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";
import message from "../../assets/images/message.png";
import { MoreHorizontal, Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full h-[70px] lg:h-[100px] px-4 lg:px-10 flex items-center justify-between">

      <div className="flex items-center gap-2 lg:gap-10">
        <img
          src={logo}
          alt="Techon"
          className="w-[80px] lg:w-[130px] h-auto object-contain"
        />

        <h1 className="hidden lg:block font-poppins font-bold text-[24px] text-[#0a1445] leading-none">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3 lg:gap-6">

        <div className="p-2 bg-gray-100 lg:bg-transparent rounded-lg cursor-pointer">
          <img
            src={message}
            alt="Message"
            className="w-[20px] lg:w-[29px]"
          />
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div className="h-[30px] w-[1px] bg-gray-400/30 mx-2"></div>

          <div className="flex items-center gap-3">
            <img
              src={profile}
              className="w-[45px] h-[45px] rounded-full object-cover border-2 border-white shadow-sm"
              alt="profile"
            />

            <div className="flex flex-col">
              <span className="font-poppins text-[#3b6cff] text-[18px] font-medium leading-none capitalize">
                techon
              </span>
              <span className="font-poppins text-gray-600 text-[14px]">
                Admin
              </span>
            </div>

            <MoreHorizontal
              className="text-gray-400 cursor-pointer"
              size={20}
            />
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <Menu className="text-[#D2F561]" size={28} />
        </div>

      </div>
    </div>
  );
}
