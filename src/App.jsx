import React from 'react'
import Home from './components/Home'
import SuccessfulUC from './components/SuccessfulUC'
import FailedUC from './components/FailUC'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />

          {/* Protected Routes */}
          <Route 
            path='/homepage' 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/homepage/successfulfreefire' 
            element={
              <ProtectedRoute>
                <SuccessfulUC />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/homepage/failedfreefires' 
            element={
              <ProtectedRoute>
                <FailedUC />
              </ProtectedRoute>
            } 
          />

          {/* Catch-all route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
