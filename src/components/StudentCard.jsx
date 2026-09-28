import './Studentcard.css'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import React from 'react'

function Studentcard({ student, deletestudent,toggleActive,toggleFavorite }) {

  const handleDelete = () => {
    deletestudent(student.id);
  };

  
  return (
    <>
      <div className="student-card">
         <div
  className="like-icon"
  onClick={() => toggleFavorite(student.id)}
>
  {student.favorite ? (
    <FaHeart color="red" />
  ) : (
    <FaRegHeart />
  )}
</div>
        <img
          src={student.imageUrl}
          alt={student.name}
          className="student-img"
        />

        <h2>{student.name}</h2>

        <p><b>Email:</b> {student.email}</p>
        <p><b>Phone:</b> {student.phone}</p>
        <p><b>Course:</b> {student.course}</p>
        <p><b>City:</b> {student.city}</p>
        <p><b>Age:</b> {student.age}</p>
        <p><b>Percentage:</b> {student.percentage}%</p>
    

        <div className="btn-group">
          <button className="view-btn">View Details</button>
         <button className={student.status === "active" ? "active-btn" : "inactive-btn"}onClick={() => toggleActive(student.id)}>
          {student.status === "active" ? "Active" : "Inactive"}
          </button>
           
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>

      </div>
    
    </>
  );
}

export default Studentcard;
