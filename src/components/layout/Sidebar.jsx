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
    <div className="fixed bottom-0 left-0 w-full h-[70px] bg-white border-t z-50 lg:relative lg:w-[50px] lg:h-full lg:bg-transparent lg:border-none p-2 lg:p-0">
      
      {/* അകലം മാക്സിമം താഴേക്ക് നീക്കാൻ lg:pb-4 നൽകി */}
      <div className="flex lg:flex-col h-full items-center justify-between pb-0 lg:pb-4">
        
        {/* മുകളിലെ മെനു സെക്ഷൻ: വീതി 44px ആക്കി കുറച്ചു (Slim look), gap-2 നൽകി */}
        {/* മുകളിലെ മെനു സെക്ഷൻ */}
<div className="flex lg:flex-col w-full lg:w-[44px] bg-white/40 backdrop-blur-xl rounded-[40px] lg:border border-white/20 items-center justify-around lg:justify-start py-2 lg:py-4 gap-2 shadow-sm">
  {menuItems.map((icon, index) => (
    <div
      key={index}
      className={`w-[32px] h-[32px] flex items-center justify-center rounded-full cursor-pointer transition-all ${
        index === 0 ? "bg-[#D2F561] shadow-md" : "hover:bg-white/20"
      }`}
    >
      <img 
        src={icon} 
        /* mix-blend-multiply അല്ലെങ്കിൽ brightness-100 ഉപയോഗിച്ച് വൈറ്റ് ബോക്സ് ഒഴിവാക്കാം */
        className={`object-contain transition-all ${
          index === 0 
            ? "w-[23px] h-[39px] brightness-100 mix-blend-multiply" 
            : "w-[16px] h-[16px] brightness-0 opacity-80"
        }`} 
        alt="nav-icon"
      />
    </div>
  ))}
</div>

        {/* താഴെയുള്ള സെക്ഷൻ: പ്രൊഫൈലും ലോഗൗട്ടും തമ്മിലുള്ള അകലം കൂട്ടാൻ gap-4 നൽകി */}
        <div className="hidden lg:flex w-[44px] bg-white/40 backdrop-blur-xl rounded-[40px] border border-white/20 flex-col items-center py-2 gap-4 shadow-sm">
          {/* Logout Icon */}
          <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center cursor-pointer shadow-sm">
            <img src={contact} className="w-[14px] brightness-0 opacity-70" alt="logout-icon" />
          </div>
          {/* Profile Logo */}
          <img 
            src={profile_logo} 
            className="w-[44px] h-[44px] rounded-full object-cover border-2 border-white" 
            alt="user-profile"
          />
        </div>

      </div>
    </div>
  );
}