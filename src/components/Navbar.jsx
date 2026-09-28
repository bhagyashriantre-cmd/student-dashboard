import '../components/Navbar.css';
import { FaCalendarAlt, FaUsers} from "react-icons/fa";
import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
     <div className="logo">
        <h2>Dreams<span>Guider</span></h2>
     </div>
     <div className="title">
        <h2>Student Dashboard</h2>
     </div>
      <div className="right">
        <div className="date">
          <FaCalendarAlt />
        <span>Date:4/08/2026</span>
       </div>
        <div className="students">
          <FaUsers />
       <span>TotalStudent:15</span>
      </div>
     </div>

    </nav>
  )
}

export default Navbar