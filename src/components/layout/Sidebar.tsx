'use client'
 
import { usePathname } from 'next/navigation'

import {
 
    BarChatIcon,

  ClockIcon,
  CogIcon,
  DocumentCheckIcon,
  DocumentIcon,
  FilterIcon,
  GridFourIcon,
  HomeIcon,
  PieChartIcon,
} from "@/app/assets/dashboard/icons";
import React, {
  FunctionComponent,
  SVGProps,
} from "react";
import SidebarItem from "./SidebarItem";
export default function Sidebar() {
    const pathname = usePathname();
    console.log('====================================');
    console.log(pathname);
    console.log('====================================');
  return (
    <aside className="col-span-3 mr-4 bg-white px-8 py-8 min-h-dvh flex-col flex gap-8">
      <section>
        <h2 className="text-xl font-semibold">Test configuration</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {testConfigList.map(({ title, path, icon: Icon }) => {
           

            return   <SidebarItem key={title} title={title} path={path} icon={Icon} isActive={pathname===path}/>
          })}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Test configuration</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {testProgressSidebasrList.map(({ title, path, icon: Icon }) => (
            <SidebarItem key={title} title={title} path={path} icon={Icon} isActive={pathname===path} />
          ))}
        </ul>
      </section>
      
 
    </aside>
  );
}

export interface SideBarType {
  title: string;
  path?: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  isActive?:boolean
}
const testConfigList: SideBarType[] = [
  {
    title: "Basic Settings",
    path: "",
    icon: CogIcon,
  },
  {
    title: "Question manager",
    path: "/Dashboard/question-manager",
    icon: FilterIcon,
  },
  {
    title: "Question settings",
    path: "",
    icon: GridFourIcon,
  },
  {
    title: "Test start page",
    path: "",
    icon: HomeIcon,
  },
  {
    title: "Time Settings",
    path: "",
    icon: ClockIcon,
  },
  {
    title: "Grading and Summary",
    path: "",
    icon: DocumentIcon,
  },
];

const testProgressSidebasrList: SideBarType[] = [
  {
    title: "Test Results",
    path: "",
    icon: BarChatIcon,
  },
  {
    title: "Test Sheets Review",
    path: "",
    icon: DocumentCheckIcon,
  },
  {
    title: "Statistics",
    path: "/Dashboard/statistics",
    icon: PieChartIcon,
  },
];


