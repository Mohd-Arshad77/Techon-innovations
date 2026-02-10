import React from "react";
import officer from "../../assets/images/officer.png"; 
import assetMgt from "../../assets/images/asset-management.png";
import asset from "../../assets/images/folders.png";

const GlassCard = () => {
  const cardData = [
    { label: "Total Employees", count: "3", img: officer },
    { label: "Active Items", count: "5", img: assetMgt },
    { label: "Total Employees", count: "0", img: asset },
    { label: "Total Employees", count: "0", img: asset },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 w-full h-full">

      {cardData.map((card, i) => (
        <div
          key={i}
          className="
            bg-[#5266f2]
            rounded-[28px]
            px-6
            py-5
            text-white
            flex flex-col
            justify-between
            shadow-lg
          "
        >

          {/* Top */}
          <div className="flex justify-between items-start">

            {/* Icon */}
            <div className="w-[52px] h-[52px] rounded-full bg-white/10 flex items-center justify-center">
              <img
                src={card.img}
                className="w-9 h-9 object-contain"
              />
            </div>

            {/* Label */}
            <span className="text-[11px] font-medium uppercase opacity-90 text-right">
              {card.label}
            </span>
          </div>


          {/* Count */}
          <div className="mt-3">
            <span className="text-[60px] font-bold leading-none">
              {card.count}
            </span>
          </div>


          {/* Dots */}
          <div className="flex justify-end gap-1 mt-2">
            <span className="w-[6px] h-[6px] bg-[#D2F561] rounded-full"></span>
            <span className="w-[6px] h-[6px] bg-[#D2F561] rounded-full"></span>
            <span className="w-[6px] h-[6px] bg-[#D2F561] rounded-full"></span>
          </div>

        </div>
      ))}

    </div>
  );
};

export default GlassCard;
