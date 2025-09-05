
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Header/>
      <div  className='content flex'>
        <Sidebar/>
        <Main/>
      </div>
    </>
  )
}

export default App
