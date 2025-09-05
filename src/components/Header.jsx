import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#1d2125] w-full h-12 p-3 border-b border-b-[#9fadbc29] border-box flex flex-row justify-between'>
      <div className="left flex justify-center items-center">
        <h3 className='text-slate-50'>Trello Clone</h3>
      </div>
      <div className="right flex items-center space-x-4">
        <span>Remote Dev</span>
        <img className='bg-white rounded-4xl w-8 h-8' src="fa" alt="Img" />
      </div>
    </div>
  )
}

export default Header
