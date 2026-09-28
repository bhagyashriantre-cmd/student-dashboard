import Dashboard from './components/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import React, { useState, useEffect } from 'react'
import Addstudent from './components/Addstudent.jsx'
import Studentcard from './components/StudentCard.jsx'


function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addstudent = (newstudent) => {
    setStudents([...students, newstudent]);
  };

  const deletestudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  
  
  const toggleActive = (id) => {
  setStudents(
    students.map((student) =>
      student.id === id
        ? {
            ...student,
            status: student.status === "active"
              ? "inactive"
              : "active"
          }
        : student
    )
  );
};






const toggleFavorite = (id) => {
  setStudents(
    students.map((student) =>
      student.id === id
        ? { ...student, favorite: !student.favorite }
        : student
    )
  );
};
  
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Dashboard
        students={students}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Addstudent addstudent={addstudent} />
      <div className="studentlist">
        {filteredStudents.map((student) => (
          <Studentcard
            key={student.id}
            student={student}
            deletestudent={deletestudent}
            toggleActive={toggleActive}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </>
  )
}

export default App;






















// import Dashboard from './components/Dashboard.jsx'
// import Navbar from './components/Navbar.jsx'
// import React, { useState } from 'react'
// import Addstudent from './components/Addstudent.jsx'
// import Studentcard from './components/Studentcard.jsx'

// function App() {
//   const [students, setStudents] = useState([]);

//   const addstudent = (newstudent) => {
//     setStudents([...students, newstudent]);
//   };

//   const deletestudent = (id) => {
//     setStudents(students.filter((student) => student.id !== id));
//   };

//   return (
//     <>
//       <Navbar />
//       <Dashboard />
//       <Addstudent addstudent={addstudent} />
//       <div className="studentlist">
//         {students.map((student) => (
//           <Studentcard
//             key={student.id}
//             student={student}
//             deletestudent={deletestudent}
//           />
//         ))}
//       </div>

//     </>
//   )
// }

// export default App;