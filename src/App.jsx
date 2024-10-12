import React from 'react'

import Home from './Home'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Signup'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
  ])
  return (

    <div>
      <RouterProvider router={router}/>
      {/* <Login/> */}
     <Home/>
    </div>
  )
}

export default App
