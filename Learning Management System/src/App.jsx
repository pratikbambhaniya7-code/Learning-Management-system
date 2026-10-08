import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";

function App() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Pratik Bambhaniya",
      course: "React JS"
    },
    {
      id: 2,
      name: "Daksh Patel",
      course: "Python"
    },
    {
      id: 3,
      name: "Sandip Desai",
      course: "Java"
    }
  ]);

  const [courses] = useState([
    {
      id: 1,
      title: "React JS",
      category: "Web",
      progress: 85,
      trainer: "Mr. Raj"
    },
    {
      id: 2,
      title: "Python",
      category: "Programming",
      progress: 60,
      trainer: "Mr. Amit"
    },
    {
      id: 3,
      title: "Java",
      category: "Programming",
      progress: 95,
      trainer: "Mr. Rahul"
    },
    {
      id: 4,
      title: "Bootstrap",
      category: "Web",
      progress: 75,
      trainer: "Mr. Jay"
    }
  ]);

  return (

    <>

      <Navbar />

      <div className="container-fluid">

        <div className="row">

          <div className="col-lg-2 p-0">
            <Sidebar />
          </div>

          <div className="col-lg-10">

            <Dashboard courses={courses} />

            <StudentList
              students={students}
              setStudents={setStudents}
            />
            <footer className="footer">
  <h5>Learning Management System</h5>
  <p>© 2026 All Rights Reserved | Developed by Pratik Bambhaniya</p>
</footer>

          </div>

        </div>

      </div>

    </>

  );
}

export default App;