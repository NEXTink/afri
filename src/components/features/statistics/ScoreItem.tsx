import React from "react";
interface ScoreItemData {
    title:string,
    color:string,
    breakDown:{
        percentage:string,
        count:string
    }
}
export default function ScoreItem({data}:{data:ScoreItemData}) {
  return (
    <div className="flex items-stretch gap-2 mb-4">
      <span className={`w-3 h-10 ${data?.color} rounded-2xl`}></span>
      <div className="border border-slate-300  w-full min-w-72 rounded-md flex  justify-between items-stretch">
        <div style={{width:`${data?.breakDown?.percentage}`}} className={`uppercase ${data?.color}  flex items-center px-2 rounded-md`}>
          {data?.title}
        </div>
        <div className="flex items-center pr-4 gap-4">
            <span className="font-medium">{data?.breakDown?.percentage}</span>
            <span className="text-textGray">{data?.breakDown?.count}</span>
        </div>
      </div>
    </div>
  );
}
