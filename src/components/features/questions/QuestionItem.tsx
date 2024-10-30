import React from "react";
import QuestionGenerator, { QuestionInterface } from "./QuestionGenerator";

export default function QuestionItem({ data ,count}: { data: QuestionInterface,count:number }) {
  return (
    <div className="p-4 rounded-md bg-white shadow-md shadow-gray-200">
      <div className="flex justify-between items-center">
        <div className=" flex items-center gap-4">
          <input type="checkbox" name="" id="" />
          <p className="t">Q. {count}</p>
        </div>
        <div className="">
          <ul className="flex gap-4">
            <li className="flex gap-2 items-center">
              <span className="text-textGray2">Topic</span>
              <span>Farm tools</span>
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-textGray2">Type</span>
              <span>Single choice</span>
            </li>
            <li className="flex gap-2 items-center">
              <span className="text-textGray2">Points</span>
              <span>1</span>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="">
      <QuestionGenerator
          id={data.id}
          title={data.title}
          options={data.options}
          type={data.type}
        />
      </div>
    </div>
  );
}
