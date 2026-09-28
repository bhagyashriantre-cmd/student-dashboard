import React from 'react'
import '../components/Dashboard.css';

function Dashboard({ students, searchTerm, setSearchTerm }) {
  const total = students.length;
  const active = students.filter((s) => s.status === "active").length;
  const inactive = students.filter((s) => s.status === "inactive").length;
  const favorite = students.filter((s) => s.favorite).length;



  return (
    <>
      <div className="dashboard">
        <div className="cards">
          <div className="card">
            <h3>Total Student</h3>
            <h1>{total}</h1>
          </div>
          <div className="card">
            <h3>Active Students</h3>
            <h1>{active}</h1>
          </div>
          <div className="card">
            <h3>Inactive Student</h3>
            <h1>{inactive}</h1>
          </div>
          <div className="card">
            <h3>Favoriate student</h3>
            <h1>{favorite}</h1>
          </div>
        </div>
      </div>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search Student by Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  )
}

export default Dashboard;


















// import React from 'react'
// import '../components/Dashboard.css';
// function Dashboard() {
//   return (
//     <> <div className="dashboard">
//     <div className="cards">
//         <div className="card">
//             <h3>Total Student</h3>
//             <h1>0</h1>
//         </div>
//         <div className="card">
//             <h3>Active Students</h3>
//             <h1>0</h1>
//         </div>
//         <div className="card">
//             <h3>Inactive Student</h3>
//             <h1>0</h1>
//         </div>
//         <div className="card">
//             <h3>Favoriate student</h3>
//             <h1>0</h1>
//         </div>
//     </div>
//     </div>
//     <div className="search-section">
//       <input type="text" placeholder="Search Student by Name..." />
//     </div>
//     </>
//   )
// }

// export default Dashboard