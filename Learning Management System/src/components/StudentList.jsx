import { useState } from "react";

function StudentList({ students, setStudents }) {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");

  const addStudent = () => {

    if (name === "" || course === "") {
      alert("Please Fill All Fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      course,
    };

    setStudents([...students, newStudent]);

    setName("");
    setCourse("");
  };

  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <div className="card shadow-lg border-0">

        <div className="card-header bg-success text-white">
          <h3>Student Management</h3>
        </div>

        <div className="card-body">

          <div className="row mb-3">

            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Course Name"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>

            <div className="col-md-4 d-grid">
              <button
                className="btn btn-success"
                onClick={addStudent}
              >
                Add Student
              </button>
            </div>

          </div>

          <div className="mb-3">

            <input
              className="form-control"
              placeholder="Search Student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <table className="table table-hover table-striped text-center">

            <thead className="table-dark">

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {filteredStudents.map((student) => (

                <tr key={student.id}>

                  <td>{student.id}</td>

                  <td>{student.name}</td>

                  <td>{student.course}</td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeStudent(student.id)}
                    >
                      Remove
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default StudentList;