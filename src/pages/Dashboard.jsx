import React from "react";
import box from "../assets/images/box.png";

import StatCard from "../components/cards/StatCard";
import GlassCard from "../components/ui/GlassCard";


const BarGraph = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = [100, 70, 130, 90, 75, 170, 90, 120, 75, 100, 75, 85];

  return (
    <div className="flex flex-col h-full w-full justify-end px-1 pb-1">
      <div className="flex items-baseline justify-between h-[180px] relative border-b border-gray-100">
        <div className="absolute top-[30%] left-0 w-full border-t border-dashed border-blue-300 opacity-20"></div>
        {data.map((height, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            {/* UPDATED: rounded-full for curved bottom matching Figma Rectangle 38 */}
            <div
              className={`w-[20px] rounded-full transition-all duration-300 ${
                months[i] === "Jun" ? "bg-[#C8E764]" : "bg-[#E9EDF7]"
              }`}
              style={{ height: `${height}px` }}
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
    <div className="flex flex-col gap-6 w-full h-full p-70 overflow-hidden font-poppins">

      {/* ================= TOP ROW (KEEP SAME) ================= */}
     <div className="flex gap-6 h-[320px]">

  {/* LEFT SMALL CARD */}
  <div className="w-[32%] h-full">
    <StatCard title="Documents Expiring">
      <BarGraph />
    </StatCard>
  </div>

  {/* RIGHT BIG CARD */}
  <div className="flex-1 h-full">
    <StatCard
      title="This Month Expires Documents"
      isTable
      headers={[
        "Entity",
        "Email",
        "Document Name",
        "Document Type",
        "Document Type",
        "Document Type",
        "Document Type",
      ]}
      boxImage={box}
    />
  </div>

</div>



      {/* ================= BOTTOM ROW (FIXED) ================= */}
      <div className="flex gap-6 flex-1 min-h-0">

        {/* Documents Expiry (LEFT) */}
        <div className="w-[32%] h-full">
          <StatCard
            title="Documents Expiry"
            isTable
            headers={["Document Type", "Document Name", "Status", "Detail"]}
            boxImage={box}
          />
        </div>


        {/* Blue Cards (RIGHT) */}
        <div className="flex-1 h-full">
          <GlassCard />
        </div>

      </div>
    </div>
  );
}
