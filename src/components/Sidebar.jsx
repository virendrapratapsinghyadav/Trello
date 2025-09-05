import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'react-feather'

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);


  return (
    <div className={`bg-[#121417] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] transition-all linear duration-500 flex-shrink-0 ${collapsed? 'w-[42px]' :'w-[280px]'}`}>
      
      { collapsed && 
        <div className='p-2'>
        <button 
        className='hover:bg-slate-800 rounded-sm cursor-pointer'
        onClick={()=>setCollapsed(!collapsed)}
        >
            <ChevronRight size={18}></ChevronRight>
        </button>
      </div>
      }
      {
        !collapsed && <div>
        <div className="workspace p-3 flex justify-between border-b border-b-[#9fadbc29]">
        <h4>Remote Dev's Workspace</h4>
        <button 
        className='hover:bg-slate-600 rounded-sm cursor-pointer'
        onClick={()=>setCollapsed(!collapsed)}
        >
            <ChevronLeft size={18}></ChevronLeft>
        </button>
        </div>
        <div className="boardlist">
            <div className='flex justify-between px-3 py-2'>
                <h6>Your Boards</h6>
                <button
                className='hover:bg-slate-600  rounded-sm cursor-pointer'
                >
                    <Plus size={16}></Plus>
                </button>
            </div>
        </div>
        <ul>
            <li>
                <button className='px-3 py-2 w-full text-sm flex justify-start align-baseline hover:bg-gray-500'>
                    <span className='w-6 h-max rounded-sm mr-2 bg-red-600'>&nbsp;</span>
                    <span>My Trello Board</span>
                </button>
            </li>
        </ul>
      </div>}
    </div>
  )
}

export default Sidebar
