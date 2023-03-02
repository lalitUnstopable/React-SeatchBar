import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Puppy from './Puppy'
import Search from './Search'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/puppy/:id" element={<Puppy/>} />
        <Route path="/search" element={<Search/>} />
    </Routes>
  )
}

export default AllRoutes