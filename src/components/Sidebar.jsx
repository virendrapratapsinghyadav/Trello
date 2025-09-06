import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus, X } from 'react-feather'
import { Popover, usePopover } from 'react-tiny-popover';
import { BoardContext } from '../context/BoardContext';
import { useContext } from 'react';

const Sidebar = () => {

    const blankBoard = {
        name:'',
        bgcolor:'#f60000',
        list:[]
    };

    const [boardData, setBoardData] = useState(blankBoard);

    const [collapsed, setCollapsed] = useState(false);
    const [showPop, setShowPop] = useState(false);
    const {allboard, setAllboard} = useContext(BoardContext);
    
    const setActiveboard =(i)=>{
        let newBoard = {...allboard}
        newBoard.active = i;
        setAllboard(newBoard);
    }

    const addBoard =()=>{

        let newB = {
            ...allboard,
            boards: [...(allboard.boards), boardData]
        };
        setAllboard(newB);
        setBoardData(blankBoard);
        setShowPop(!showPop);
    }


    return (
        <div className={`bg-[#121417] h-[calc(100vh-3rem)] border-r border-r-[#9fadbc29] transition-all linear duration-500 flex-shrink-0 ${collapsed ? 'w-[42px]' : 'w-[280px]'}`}>

            {collapsed &&
                <div className='p-2'>
                    <button
                        className='hover:bg-slate-800 rounded-sm cursor-pointer'
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <ChevronRight size={18}></ChevronRight>
                    </button>
                </div>
            }
            {
                !collapsed && <div>
                    {/* <p>{JSON.stringify(allboard)}</p> */}
                    <div className="workspace p-3 flex justify-between border-b border-b-[#9fadbc29]">
                        <h4>Remote Dev's Workspace</h4>
                        <button
                            className='hover:bg-slate-600 rounded-sm cursor-pointer'
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            <ChevronLeft size={18}></ChevronLeft>
                        </button>
                    </div>
                    <div className="boardlist">
                        <div className='flex justify-between px-3 py-2'>
                            <h6>Your Boards</h6>
                            
                            <Popover
                                isOpen={showPop}
                                align='start'
                                positions={[ 'right', 'top', 'bottom', 'left']}
                                content={
                                <div className='ml p-2 w-60 flex flex-col justify-center items-center bg-slate-600 text-white rounded'>
                                    <button
                                    onClick={()=>setShowPop(!showPop)}
                                    className=' cursor-pointer absolute right-2 top-2 hover:bg-gray-500 p-1 rounded'><X size={16}/></button>  
                                    <h4 className='py-3'>Create Board</h4>
                                    <img src="https://placehold.co/200x120/png" alt="" />   
                                    <div className='mt-2 flex flex-col items-start w-full '>
                                        <label htmlFor="title">Board Title <span>*</span> </label>
                                        <input value={boardData.name} 
                                        onChange={(e)=>setBoardData({...boardData, name: e.target.value})}  type="text" className='h-8 px-2 w-full bg-gray-700' />
                                        <label htmlFor="Color">Board Color </label>
                                        <input value={boardData.bgcolor} onChange={(e)=>setBoardData({...boardData, bgcolor: e.target.value})} type="color" className='h-8 px-2 w-full bg-gray-700' />
                                        <button onClick={()=>addBoard()} className='cursor-pointer w-full rounded h-8 bg-slate-700 mt-2 hover:bg-gray-700'>Create</button>
                                    </div>                       
                                </div>
                                }
                            >
                            <button
                                onClick={()=>setShowPop(!showPop)}
                                className='hover:bg-slate-600  rounded-sm cursor-pointer'>
                                <Plus size={16}></Plus>
                            </button>
                            </Popover>
                        </div>
                    </div>
                    <ul>
                        { allboard.boards && allboard.boards.map((e, i)=>{
                            return(
                            <li key={i}>
                            <button 
                            onClick={()=>setActiveboard(i)}
                            className='px-3 py-2 w-full text-sm flex justify-start align-baseline hover:bg-gray-500'>
                                <span className='w-6 h-max rounded-sm mr-2' style={{backgroundColor:`${e.bgcolor}`}}>&nbsp;</span>
                                <span>{e.name}</span>
                            </button>
                            </li>
                            )
                        })
                        }
                    </ul>
                </div>}
        </div>
    )
}

export default Sidebar
