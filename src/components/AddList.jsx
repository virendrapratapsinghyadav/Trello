import React, { useState } from 'react'
import { Plus, X } from 'react-feather'

const AddList = ({getlist}) => {
  
  const [list, setList] = useState('');
  const[show, setShow] = useState(false);

  const savedList=()=>{
    if(!list){
      return;
    }
    getlist(list);
    setList('');
    setShow(!show);
  }

  const closeBtn=()=>{
    setList('');
    setShow(!show);
  }
  

  return (
    <div>
      <div className='flex flex-col h-fit flex-shrink-0 mr-3 w-60 rounded-md p-2 bg-black'>
        {show && <div>
          <textarea value={list} onChange={(e)=>setList(e.target.value)} className='p-1  w-full rounded-md border-2 bg-zinc-700 border-zinc-900 ' name="" id="" cols="30" rows="2" placeholder='Enter Card Title...'></textarea>
          <div className='flex p-1'>
            <button onClick={()=>savedList()} className='p-1 rounded mr-2 bg-sky-600 text-white hover:bg-gray-600'>Add List</button>
            <button onClick={()=>closeBtn()} className='p-1 cursor-pointer rounded hover:bg-gray-600'><X size={16}/> </button>
          </div>
        </div>}
        {!show && <button onClick={()=>setShow(!show)} className='flex cursor-pointer p-1 w-full rounded justify-center gap-2 items-center mt-1 hover:bg-gray-500 h-8'>
          <Plus size={16}/>Add a list
        </button>}
      </div>
    </div>
  )
}

export default AddList
