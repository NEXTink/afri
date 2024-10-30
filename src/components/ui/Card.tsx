import React, { ReactNode } from 'react'

export default function Card({children,className}:{children:ReactNode,className?:string}) {
  return (
    <div className={`p-4 rounded-md bg-white shadow-md shadow-gray-200 ${className!}`}>{children}</div>
  )
}
