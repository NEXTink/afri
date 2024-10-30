import DashboardTopNav from "@/components/layout/DashboardTopNav";
import Sidebar from "@/components/layout/Sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <DashboardTopNav />
      <main className="max-w-8xl mx-auto grid grid-cols-12 z-1  gap-1">
        <Sidebar />
        <section className="col-span-9  pr-8 py-8">{children}</section>
      </main>
    </div>
  );
}
