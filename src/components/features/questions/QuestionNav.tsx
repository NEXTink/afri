import { PlusIcon, SortIcon } from '@/app/assets/dashboard/icons'
import React from 'react'

export default function QuestionNav() {
  return (
    <div className='p-4 rounded-md sticky top-0 bg-white shadow-md shadow-gray-200 flex items-center justify-between'>
      <div className=" flex items-center gap-4">
        <input type="checkbox" name="" id="" />
        <p className="text-textGray">
            QUESTIONS <span className='text-black font-medium'>
                33 / 60
            </span>
        </p>
      </div>

      <div>
        <ul className="flex items-center gap-4 font-medium">
         
          <li className="">
            <p className="flex items-center gap-2">
              <SortIcon className="h-5 stroke-4" />
              <span className="font-medium">Reorder questions</span>
            </p>
          </li>
          <li className="">
            <button className="flex items-center font-bold gap-2 bg-primary text-white rounded-md px-4 py-2 hover:bg-primary/40 ease-in duration-100">
              <PlusIcon className="h-4 stroke-4 stroke-white" />
              <span className="font-medium">Add question</span>
            </button>
          </li>
        </ul>
      </div>

    </div>
  )
}
