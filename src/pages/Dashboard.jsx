import React from "react";
import box from "../assets/images/box.png";
import StatCard from "../components/cards/StatCard";
import GlassCard from "../components/ui/GlassCard";

const BarGraph = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = [100, 70, 130, 90, 75, 170, 90, 120, 75, 100, 75, 85];
  const maxVal = Math.max(...data);

  return (
    <div className="flex flex-col h-full w-full justify-end">
      {/* Chart Area */}
      <div className="flex-1 flex items-baseline justify-between relative border-b border-gray-100 pb-2 mb-2">
        {/* Dash Line background */}
        <div className="absolute top-[40%] left-0 w-full border-t border-dashed border-blue-300 opacity-20 pointer-events-none"></div>
        
        {data.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
            <div
              className={`w-[12px] lg:w-[18px] rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                months[i] === "Jun" ? "bg-[#C8E764]" : "bg-[#E9EDF7]"
              }`}
              style={{ height: `${(val / maxVal) * 85}%` }}
            ></div>
            <span className="text-[8px] text-gray-400 font-poppins font-medium uppercase">
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
    <div className="flex flex-col gap-6 w-full h-full p-4 lg:p-6 overflow-y-auto bg-[#F4F7FE] font-poppins">
      {/* Top Row: Documents Expiring & Big Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[350px]">
        <div className="lg:col-span-4">
          <StatCard title="Documents Expiring">
            <BarGraph />
          </StatCard>
        </div>

        <div className="lg:col-span-8">
          <StatCard 
            title="This Month Expires Documents" 
            isTable={true} 
            headers={["Entity", "Email", "Document Name", "Type", "Status", "Date", "Action"]}
            boxImage={box} 
          />
        </div>
      </div>

      {/* Bottom Row: Expiry List & Glass Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[350px]">
        <div className="lg:col-span-4">
          <StatCard 
            title="Documents Expiry" 
            isTable={true} 
            boxImage={box} 
            headers={["Type", "Name", "Status", "Detail"]} 
          />
        </div>

        <div className="lg:col-span-8">
          <GlassCard />
        </div>
      </div>
    </div>
  );
}