import React from "react";

const FigmaArrow = () => (
  <button className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black/5 transition-all flex-shrink-0">
    <span className="text-[16px] font-medium text-black">↗</span>
  </button>
);

const StatCard = ({ title, children, isTable, boxImage, headers }) => {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-[25px] border border-white/20 p-5 flex flex-col shadow-sm h-full font-poppins overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-[14px] text-[#0a1445]">{title}</h3>
        <FigmaArrow />
      </div>

      {isTable && headers && (
        <div className="overflow-x-auto scrollbar-hide">
          <div
            className={`grid grid-cols-${headers.length} min-w-full text-[10px] font-bold text-[#0a1445] border-b border-gray-100 pb-2 mb-4 uppercase`}
          >
            {headers.map((header, index) => (
              <span key={index} className="px-1 whitespace-nowrap">
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
              className="w-20 h-20 object-contain mb-2"
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
