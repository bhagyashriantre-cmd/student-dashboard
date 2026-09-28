import React, { useState } from 'react'
import '../components/Addstudent.css'
import { FaUserGraduate } from "react-icons/fa";

function AddStudent({ addstudent }) {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", course: "",
    city: "", age: "", percentage: "", imageUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { id: Date.now(), ...formData };
    addstudent(newStudent);
    setFormData({
      name: "", email: "", phone: "", course: "",
      city: "", age: "", percentage: "", imageUrl: ""
    });
  };

  return (
    <div className="studentform">
      <span><FaUserGraduate className="student-logo" /></span>
      <span><h2>Add Student</h2></span>
      <form className="formgroup" onSubmit={handleSubmit}>
        <div className="input1">
          <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} />
          <input type="text" name="course" placeholder="Enter Course" value={formData.course} onChange={handleChange} />
        </div>
        <div className="input2">
          <input type="text" name="city" placeholder="Enter City" value={formData.city} onChange={handleChange} />
          <input type="number" name="age" placeholder="Enter Age" value={formData.age} onChange={handleChange} />
          <input type="number" name="percentage" placeholder="Enter Percentage" value={formData.percentage} onChange={handleChange} />
          <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;