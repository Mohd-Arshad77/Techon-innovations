import React from "react";
import box from "../assets/images/box.png";
import StatCard from "../components/cards/StatCard";
import GlassCard from "../components/ui/GlassCard";

const BarGraph = () => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const data = [50,80,110,75,65,115,60,95,40,85,55,75];

  return (
    <div className="flex flex-col h-full w-full justify-end px-1 pb-2 pt-14 relative">
      <div className="absolute top-[-2%] left-0 w-full flex items-center gap-2 z-0 px-1">
        <div className="flex-1 border-t border-dashed border-blue-400/20"></div>
        <span className="text-[10px] text-blue-400/30 font-bold">30</span>
      </div>

      <div className="flex items-baseline justify-between h-[120px] relative border-b border-gray-100/50 z-10">
        {data.map((height, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div
              className={`w-[16px] lg:w-[20px] rounded-[6px] transition-all duration-500 ease-in-out ${
                months[i] === "Jun"
                  ? "bg-[#C8E764] shadow-sm"
                  : "bg-[#E9EDF7]"
              }`}
              style={{ height: `${height}px` }}
            />
            <span className="text-[9px] text-gray-400 font-poppins font-medium">
              {months[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 w-full h-auto lg:h-[calc(100vh-120px)] p-4 lg:overflow-hidden font-poppins pb-24 lg:pb-4">

      <div className="flex flex-col lg:flex-row gap-6 lg:flex-[1.2] min-h-0">
        <div className="w-full lg:w-[32%] h-[320px] lg:h-full">
          <StatCard title="Documents Expiring">
            <BarGraph />
          </StatCard>
        </div>

        <div className="flex-1 w-full h-[350px] lg:h-full overflow-hidden">
          <StatCard title="This Month Expires Documents">
            <div className="w-full h-full flex flex-col px-1 font-poppins overflow-x-auto">
              <div className="min-w-[700px] lg:min-w-0">

                <div className="flex items-center border-b border-gray-400 pb-2 mb-4">
                  <span className="w-[8%] text-[11px] text-[#0a1445]">Entity</span>
                  <span className="w-[8%] text-[11px] text-[#0a1445]">Email</span>
                  <span className="w-[16%] text-[11px] text-[#0a1445]">Document Name</span>
                  <span className="w-[15%] text-[11px] text-[#0a1445]">Document Type</span>
                  <span className="w-[15%] text-[11px] text-[#0a1445]">Document Type</span>
                  <span className="w-[14%] text-[11px] text-[#0a1445]">Document Type</span>
                  <span className="w-[19%] text-[11px] text-[#0a1445]">Document Type</span>
                </div>

                <div className="flex flex-col items-center justify-center opacity-30 py-10 lg:py-0">
                  <img
                    src={box}
                    alt="empty"
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <p className="text-[10px] text-gray-400 font-medium text-center">
                    No documents expiring
                  </p>
                </div>

              </div>
            </div>
          </StatCard>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:flex-1 min-h-0">

        <div className="w-full lg:w-[32%] h-[350px] lg:h-full">
          <StatCard
            title="Documents Expiry"
            isTable
            headers={["Type", "Name", "Status", "Detail"]}
            boxImage={box}
          />
        </div>

        <div className="flex-1 w-full h-auto lg:h-full">
          <GlassCard />
        </div>

      </div>
    </div>
  );
}
