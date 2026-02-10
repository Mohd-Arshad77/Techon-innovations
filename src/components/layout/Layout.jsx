import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "../../pages/Dashboard";

export default function Layout() {
  return (
    // Screen height lock cheyyan h-screen
    <div className="h-screen w-full bg-[#D2D2D2] flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 px-8 pb-8 gap-8 overflow-hidden">
        <Sidebar />
        {/* Dashboard area overflow hidden aakkanam */}
        <main className="flex-1 overflow-hidden">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}