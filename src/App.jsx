import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <HomePage />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <NavBar />
        <AboutPage />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <NavBar />
        <ContactUsPage />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;