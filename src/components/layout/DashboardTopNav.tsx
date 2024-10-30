import { BackIcon, EyeIcon, InfoIcon, PlayIcon } from "@/app/assets/dashboard/icons";
import React from "react";

export default function DashboardTopNav() {
  return (
    <div className="py-6 px-8 z-10 sticky shadow-md top-0 shadow-gray-200 bg-white flex items-center justify-between">
      <div className="flex items-center gap-8">
        <p className="flex items-center gap-2">
          <BackIcon className="h-5 stroke-4" />
          <span className="font-medium">Assessment</span>
        </p>
        <ul className="font-bold flex items-center gap-4 text-xs md:text-sm ">
          <li>Primary 1 .</li>
          <li>Mid Term Test .</li>
          <li>Agricultural Science</li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4 font-medium">
          <li className="border-r-slate-200 px-4  border-r-2">
            <p className="flex items-center gap-2">
              <InfoIcon className="h-5 stroke-4" />
              <span className="font-medium hidden lg:block">Assessment</span>
            </p>
          </li>
          <li className="">
            <p className="flex items-center gap-2">
              <EyeIcon className="h-5 stroke-4" />
              <span className="hidden lg:block font-medium">Test preview</span>
            </p>
          </li>
          <li className="">
            <button className="flex items-center font-bold gap-2 bg-primary text-white rounded-md px-4 py-2 hover:bg-primary/40 ease-in duration-100">
              <PlayIcon className="h-5 stroke-4 stroke-white" />
              <span className="font-bold hidden lg:block">Activate test</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
