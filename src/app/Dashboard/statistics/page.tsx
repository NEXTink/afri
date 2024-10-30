import { PieChartIcon } from "@/app/assets/dashboard/icons";
import RadialBarChart from "@/components/features/statistics/RadialBarChart";
import ScoreItem from "@/components/features/statistics/ScoreItem";
import Card from "@/components/ui/Card";

import React from "react";

export default function Page() {
  return (
    <div>
      <div className="flex gap-4 items-center mb-8">
        <PieChartIcon className="w-6" />
        <h2 className="text-2xl font-bold">Class performance statistics</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="flex gap-2 hover:shadow-lg ease-linear duration-200 ">
          <div className="">
            <h2 className="text-xl text-textGray font-bold">Attended</h2>
          </div>
          <div className="p-2">
            <RadialBarChart data={{
              color:"#0BC279",
              label:"67/70",
              series:[10]
            }} />
          </div>
        </Card>
         <Card className="flex gap-2 hover:shadow-lg ease-linear duration-200 ">
          <div className="">
            <h2 className="text-xl text-textGray font-bold">Above Avg.</h2>
          </div>
          <div className="p-2">
            <RadialBarChart data={{
              color:"#0BC279",
              label:"67/70",
              series:[10]
            }} />
          </div>
        </Card>
         <Card className="flex gap-2 hover:shadow-lg ease-linear duration-200 ">
          <div className="">
            <h2 className="text-xl text-textGray font-bold">Average score</h2>
          </div>
          <div className="p-2">
            <RadialBarChart data={{
              color:"#FFDF37",
              label:"67/70",
              series:[10]
            }} />
          </div>
        </Card>
       
      </div>
      <Card className="mt-8">
        <h2 className="upper text-textGray font-medium">
          SCORE PER QUESTION TOPIC(9)
        </h2>

        <div className="grid grid-cols-2 mt-4 gap-8">
          <div className="">
            <ScoreItem data={{
              title:"Flowering plants",
              color:"bg-red-200",
              breakDown:{
                percentage:"10%",
                count:"3/30"
              }
            }}/>
            <ScoreItem data={{
              title:"Flowering plants",
              color:"bg-red-200",
              breakDown:{
                percentage:"17.33%",
                count:"5/30"
              }
            }}/>
            <ScoreItem data={{
              title:"Flowering plants",
              color:"bg-green-300",
              breakDown:{
                percentage:"67.33%",
                count:"20/30"
              }
            }}/>
          </div>
          <div className="">
            <ScoreItem data={{
              title:"Flowering plants",
              color:"bg-red-200",
              breakDown:{
                percentage:"10%",
                count:"3/30"
              }
            }}/>
            <ScoreItem data={{
              title:"Flowering plants",
              color:"bg-amber-200",
              breakDown:{
                percentage:"67.33%",
                count:"20/30"
              }
            }}/>
          </div>
        </div>
      </Card>
    </div>
  );
}
