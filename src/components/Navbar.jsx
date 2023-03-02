import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/puppy/:id">Puppy</Link>
        <Link to="search">Search</Link>
    </div>
  )
}

export default Navbar