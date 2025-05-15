import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactUsPage from './pages/ContactUsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  }, {
    path: '/About',
    element: <AboutPage/>
  }, {
    path: '/Contact-Us',
    element: <ContactUsPage/>
  }
])

function App() {
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
