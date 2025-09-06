import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { BoardContext } from './context/BoardContext'

function App() {

  const boardData = {
    active: 0,
    boards: [
      {
      name: 'My Trlo Board',
      bgcolor: '#056598',
      list:[
        {id:'1', title:"To do", items:[{id:'cdrFt', title: "Project desc 1"}]},
        {id:'2', title:"In Progress", items:[{id:'cdrFv', title: "Project desc "}]},
        {id:'3', title:"Done", items:[{id:'cdrFb', title: "Project desc 3"}]}
      ]
      }
    ]
  }

  const [allboard, setAllboard] = useState(boardData);

  return (
    <>
      <Header />
      <BoardContext.Provider value={{allboard, setAllboard}}>
        <div className='content flex'>
          <Sidebar />
          <Main />
        </div>
      </BoardContext.Provider>
    </>
  )
}

export default App
