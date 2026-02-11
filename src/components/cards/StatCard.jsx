import React from "react";

const FigmaArrow = () => (
  <button className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition-all flex-shrink-0">
    <span className="text-[14px] font-medium text-black">↗</span>
  </button>
);

const StatCard = ({ title, children, isTable, boxImage, headers }) => {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-[25px] border border-white/20 p-5 flex flex-col shadow-sm h-full font-poppins overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-[13px] text-[#0a1445] truncate mr-2">{title}</h3>
        <FigmaArrow />
      </div>
{isTable && headers && (
  <div className="w-full mb-4">
    {/* capitalize ക്ലാസ് ഉപയോഗിച്ചു, uppercase ഒഴിവാക്കി */}
    <div className="flex items-center justify-between text-[10px] font-bold text-[#0a1445] border-b border-gray-100 pb-2 capitalize font-poppins">
      {headers.map((header, index) => (
        <span key={index} className="flex-1 text-left px-1 truncate">
          {header}
        </span>
      ))}
    </div>
  </div>
)}

      <div className="flex-1 flex flex-col min-h-0 relative">
        {children ? (
          <div className="h-full w-full">{children}</div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center opacity-30">
            <img
              src={boxImage}
              className="w-16 h-16 object-contain mb-2"
              alt="empty"
            />
            <p className="text-[10px] text-gray-400 font-medium">
              No documents expiring
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;