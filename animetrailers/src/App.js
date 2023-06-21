import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Home';
import { Trailers } from './Trailers';

function App() {
  return (
<div >
  <Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trailers/:id" element={<Trailers/>}/>
    </Routes>
  </Router>
</div>
  )
}

export default App;