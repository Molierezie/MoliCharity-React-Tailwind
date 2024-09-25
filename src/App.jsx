import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './pages/Nav.jsx'
import { ToastContainer } from 'react-toastify';



function App() {
  

  return (
    <>

    <ToastContainer />

    <Nav />

    <main>

    <Outlet />

     </main> 
    </>
  )
}

export default App
