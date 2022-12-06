import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './Blogs'
import UniqueBlog from './UniqueBlog'
import WriteBlog from './WriteBlog'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Blogs/>}></Route>
            <Route path='/blog' element={<WriteBlog/>}></Route>
            <Route path='/blogone/:id' element={<UniqueBlog/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes