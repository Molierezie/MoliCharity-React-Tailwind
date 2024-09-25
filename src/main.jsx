import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'

import Home from './pages/home.jsx'
import NotFound from './components/NotFound.jsx'


const router = createBrowserRouter(

  createRoutesFromElements(



    <Route path='/' element={<App />}> 
    

    <Route path='' element={<Home />} />
    
    <Route path='*' element={<NotFound />} />
    

    
    
    </Route>

  )
)


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
