import React from "react";
import officer from "../../assets/images/officer.png"; 
import assetMgt from "../../assets/images/asset-management.png";
import asset from "../../assets/images/folders.png";

const GlassCard = () => {
  const cardData = [
    { label: "Total Employees", count: "3", img: officer },
    { label: "", count: "5", img: assetMgt },
    { label: "Total Employees", count: "0", img: asset },
    { label: "Total Employees", count: "0", img: asset },
  ];

  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-[25px] border border-white/20 p-5 h-full w-full shadow-sm">
      <div className="grid grid-cols-4 gap-4 w-full h-full">
        {cardData.map((card, i) => {
          const isOfficer = card.img === officer;

          return (
            <div
              key={i}
              className="bg-[#5266f2] rounded-[24px] p-4 text-white flex flex-col justify-between shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  {isOfficer ? (
                    <div className="flex -space-x-5 items-center">
                      <img
                        src={card.img}
                        className="w-8 h-8 object-contain opacity-100"
                        alt="bg-officer"
                      />
                      <img
                        src={card.img}
                        className="w-8 h-8 object-contain relative z-10"
                        alt="main-officer"
                      />
                    </div>
                  ) : (
                    <img
                      src={card.img}
                      className="w-8 h-8 object-contain"
                      alt="icon"
                    />
                  )}
                </div>

                <span className="text-[3px] lg:text-[9px] font-medium capitalize opacity-90 text-right whitespace-nowrap font-poppins flex-1">
                  {card.label}
                </span>
              </div>

              <div className="mt-2 flex justify-center">
                <span className="text-4xl lg:text-5xl font-bold leading-none tracking-tight">
                  {card.count}
                </span>
              </div>

              <div className="flex justify-end gap-1 mt-1">
                <span className="w-1.5 h-1.5 bg-[#C8E764] rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-[#C8E764] rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-[#C8E764] rounded-full"></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlassCard;
