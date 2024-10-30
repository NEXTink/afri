import Image,{ StaticImageData } from "next/image";
import React, { Fragment } from "react";
export interface QuestionInterface {
  type: "multi-choice" | "single-choice" | "text";
  options?: string[];
  answer?: string;
  id?: string;
  title: string;
  image?: string | StaticImageData;
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
           {image ? (
            <Image alt="sfbksj" src={image!} width={300} height={300} className="max-w-[50%] mt-2 mb-4" />
          ) : null}
          <p className="">{title}</p>
         
          <div className="mt-4">
            {options?.map((e, i) => (
              <Fragment key={e + i}>
                <div className="flex gap-2 px-4 py-2 hover:bg-primaryHover2 rounded-md">
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
          {image ? (
  
  <Image alt="sfbksj" src={image!} width={400} height={400} className="max-w-[50%] mt-2 mb-4" />
          ) : null}
          <p className="mt-4">{title}</p>
          
          <div className="mt-4">
            {options?.map((e, i) => (
              <Fragment key={e + i}>
                <div className="flex gap-2 px-4 py-2  hover:bg-primaryHover2 rounded-md">
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
