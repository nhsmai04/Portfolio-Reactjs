import { useState } from 'react'
import React from 'react'
import Header from './layout/header'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { routes } from './routes'
import DefaultLayout from './layout'
function App() {

  return (
    <>
      <Router>
        <Routes>
          {routes.map((route,index)=>(
            <Route key={index} 
            path={route.path} 
            element={
              <DefaultLayout>
                  <route.component />
              </DefaultLayout>
            
          } />
          ))}
        </Routes>
      </Router>
        
    </>
  )
}

export default App
