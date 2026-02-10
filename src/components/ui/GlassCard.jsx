import React from "react";
import officer from "../../assets/images/officer.png"; 
import assetMgt from "../../assets/images/asset-management.png";
import asset from "../../assets/images/folders.png";

const GlassCard = () => {
  const cardData = [
    { label: "Total Employees", count: "3", type: "officer" },
    { label: "Active Items", count: "5", type: "assetMgt" },
    { label: "Total Employees", count: "0", type: "asset" },
    { label: "Total Employees", count: "0", type: "asset" },
  ];

  const images = { officer, assetMgt, asset };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full h-full font-poppins">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-[#5266f2] rounded-[30px] p-6 text-white flex flex-col justify-between relative shadow-lg overflow-hidden min-h-[170px]"
        >
          <div className="flex justify-between items-start">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center">
              {index === 0 ? (
                <>
                  <div className="absolute left-[-15px] w-full h-full rounded-full bg-white/5 border border-white/10 scale-95">
                    <img src={officer} className="w-full h-full object-contain" />
                  </div>
                  <div className="relative z-10 w-full h-full rounded-full bg-white/5 border border-white/10 shadow-sm">
                    <img src={officer} className="w-full h-full object-contain" />
                  </div>
                </>
              ) : (
                <div className="w-full h-full rounded-full bg-white/5 border border-white/10 shadow-sm flex items-center justify-center">
                  <img
                    src={images[card.type] || asset}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            <span className="text-[10px] lg:text-[11px] font-medium opacity-80 uppercase text-right leading-tight">
              {card.label}
            </span>
          </div>

          <div className="mt-4">
            <span className="text-[48px] lg:text-[64px] font-bold leading-none tracking-tighter">
              {card.count}
            </span>
          </div>

          <div className="absolute bottom-5 right-7 flex gap-1 items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-[6px] h-[6px] bg-[#D2F561] rounded-full"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlassCard;
