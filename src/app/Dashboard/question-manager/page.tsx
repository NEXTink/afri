"use client";
import { FilterIcon } from "@/app/assets/dashboard/icons";
import { QuestionInterface } from "@/components/features/questions/QuestionGenerator";
import QuestionItem from "@/components/features/questions/QuestionItem";
import QuestionNav from "@/components/features/questions/QuestionNav";
import React, { useState } from "react";

export default function Page() {
  const questions: QuestionInterface[] = [
    {
      title:
        "This is a suspense novel about the main character who accidentally gets a notebook with the various tracks and plans of a mysterious figure. The main character starts to decipher the contents of the notebook and finds that it contains mysterious codes and riddles.",
      type: "single-choice",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      id: "dfbahdshjbfjdhsbuskd",
    },
    {
      title:
        "This is a suspense novel about the main character who accidentally gets a notebook with the various tracks and plans of a mysterious figure. The main character starts to decipher the contents of the notebook and finds that it contains mysterious codes and riddles.",
      type: "multi-choice",
      options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      id: "sbfkhabsjbsafjlkwuydusiw",
    },
  ];
  return (
    <div className="">
      <div className="flex gap-4 items-center">
        <FilterIcon className="w-6" />
        <h2 className="text-2xl font-bold">Test info</h2>
      </div>
      <div className="mt-8">
        <QuestionNav />
      </div>

      <div className="mt-6 flex flex-col gap-8">
        {questions.map((e, i) => (
          <QuestionItem data={e} key={e.id} id={e.id} count={i + 1} />
        ))}
      </div>
    </div>
  );
}
