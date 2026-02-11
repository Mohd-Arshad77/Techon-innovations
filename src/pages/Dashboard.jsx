import React from "react";
import box from "../assets/images/box.png";
import StatCard from "../components/cards/StatCard";
import GlassCard from "../components/ui/GlassCard";

const BarGraph = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = [50, 80, 110, 75, 65, 115, 60, 95, 40, 85, 55, 75];

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
                months[i] === "Jun" ? "bg-[#C8E764] shadow-sm" : "bg-[#E9EDF7]"
              }`}
              style={{ height: `${height}px` }}
            ></div>
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
  // ഫിഗ്മ പ്രകാരം ഹെഡറുകൾ
  const tableHeaders = ["Entity", "Email", "Document Name", "Document Type", "Document Type", "Document Type", "Document Type"];

  return (
    <div className="flex flex-col gap-6 w-full h-full p-4 overflow-hidden font-poppins">
      
      {/* TOP ROW */}
      <div className="flex gap-6 flex-[1.2] min-h-0">
        <div className="w-[32%] h-full">
          <StatCard title="Documents Expiring">
            <BarGraph />
          </StatCard>
        </div>

 {/* RIGHT BIG CARD */}
<div className="flex-1 h-full">
<StatCard title="This Month Expires Documents">
  <div className="w-full h-full flex flex-col px-1 font-poppins">
    
    {/* കസ്റ്റം ഹെഡർ: ഫിഗ്മ ഡിസൈനിലെ പോലെ ഒരേ വരിയിൽ വരാൻ ഓരോന്നിനും വിഡ്ത്ത് നൽകി */}
    <div className="flex items-center border-b border-gray-400 pb-2 mb-4">
      <span className="w-[8%] text-[11px] font-normal text-[#0a1445] whitespace-nowrap">Entity</span>
      <span className="w-[8%] text-[11px] font-normal text-[#0a1445] whitespace-nowrap">Email</span>
      <span className="w-[16%] text-[11px] font-normal text-[#0a1445] whitespace-nowrap">Document Name</span>
      <span className="w-[15%] text-[11px] font-normal text-[#0a1445] whitespace-nowrap">Document Type</span>
      <span className="w-[15%] text-[11px] font-normal text-[#0a1445] whitespace-nowrap">Document Type</span>
      <span className="w-[14%] text-[11px] font-normal text-[#0a1445] whitespace-nowrap">Document Type</span>
      <span className="w-[19%] text-[11px] font-normal text-[#0a1445] whitespace-nowrap">Document Type</span>
    </div>
    
    {/* Empty State */}
    <div className="flex-1 flex flex-col items-center justify-center opacity-30">
      <img src={box} className="w-16 h-16 object-contain mb-2" alt="empty" />
      <p className="text-[10px] text-gray-400 font-medium">No documents expiring</p>
    </div>
  </div>
</StatCard>
</div>
      </div>

      {/* BOTTOM ROW */}
      <div className="flex gap-6 flex-1 min-h-0">
        <div className="w-[32%] h-full">
          <StatCard
            title="Documents Expiry"
            isTable
            headers={["Type", "Name", "Status", "Detail"]}
            boxImage={box}
          />
        </div>
        <div className="flex-1 h-full">
          <GlassCard />
        </div>
      </div>

    </div>
  );
}