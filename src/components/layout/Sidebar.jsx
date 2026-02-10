import React from "react";
import home from "../../assets/images/home.png";
import business from "../../assets/images/business.png";
import contact from "../../assets/images/contact.png";
import asset from "../../assets/images/asset.png";
import money from "../../assets/images/money-flow.png";
import chart from "../../assets/images/line-chart.png";
import profile_logo from "../../assets/images/profile.png";

export default function Sidebar() {
  const menuItems = [home, business, contact, asset, money, chart];

  return (
    <div className="fixed bottom-0 left-0 w-full h-[70px] bg-white border-t z-50 lg:relative lg:w-[80px] lg:h-full lg:bg-transparent lg:border-none p-2 lg:p-0">
      <div className="flex lg:flex-col h-full items-center justify-between pb-0 lg:pb-6">
        <div className="flex lg:flex-col w-full lg:w-[66px] bg-white/40 backdrop-blur-xl rounded-full lg:border border-white/20 items-center justify-around lg:justify-start py-2 lg:py-6 gap-3 shadow-sm">
          {menuItems.map((icon, index) => (
            <div
              key={index}
              className={`w-[42px] h-[42px] flex items-center justify-center rounded-full cursor-pointer transition-all ${
                index === 0 ? "bg-[#D2F561] shadow-md" : "hover:bg-white/40"
              }`}
            >
              <img src={icon} className="w-[22px] h-[22px] brightness-0 contrast-200" />
            </div>
          ))}
        </div>

        <div className="hidden lg:flex w-[66px] bg-white/40 backdrop-blur-xl rounded-[50px] border border-white/20 flex-col items-center py-4 gap-4 shadow-sm">
          <div className="w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center">
            <img src={contact} className="w-[18px] brightness-0 contrast-200 rotate-10" />
          </div>
          <img src={profile_logo} className="w-[45px] h-[45px] rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
}