import React, { Fragment } from "react";
export interface QuestionInterface {
  type: "multi-choice" | "single-choice" | "text";
  options?: string[];
  answer?: string;
  id?: string;
  title: string;
  image?: string;
}

export default function QuestionGenerator({
  type,
  options,
  id,
  image,
  title,
}: QuestionInterface) {
  switch (type) {
    case "multi-choice":
      return (
        <div key={id} className="mt-4">
          <p className="">{title}</p>
          {image ? (
            <img src={image!} className="max-w-[50%] mt-2 mb-4" />
          ) : null}
          <div className="mt-4">
            {options?.map((e, i) => (
              <Fragment key={e + i}>
                <div className=" flex gap-2">
                  <input
                    type="checkbox"
                    id={`${e + i + id}`}
                    name={title + id}
                  />
                  <label htmlFor={`${e + i + id}`}>{e}</label>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      );
    case "single-choice":
      return (
        <div key={id} className="mt-4">
          <p className="mt-4">{title}</p>
          {image ? (
            <img src={image!} className="max-w-[50%] mt-2 mb-4" />
          ) : null}
          <div className="mt-4">
            {options?.map((e, i) => (
              <Fragment key={e + i}>
                <div className="flex gap-2">
                  <input type="radio" id={`${e + i + id}`} name={title + id} />
                  <label htmlFor={`${e + i + id}`}>{e}</label>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      );
    default:
      return <></>;
  }
}
