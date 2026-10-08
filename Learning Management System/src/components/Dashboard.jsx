import { useState } from "react";
import CourseCard from "./CourseCard";

function Dashboard({ courses }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || course.category === category)
    );
  });

  return (
    <div className="container-fluid mt-4">

      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card border-0 shadow-lg bg-primary text-white">
            <div className="card-body text-center">
              <h2>{courses.length}</h2>
              <h5>Total Courses</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-lg bg-success text-white">
            <div className="card-body text-center">
              <h2>120</h2>
              <h5>Total Students</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-lg bg-warning text-dark">
            <div className="card-body text-center">
              <h2>8</h2>
              <h5>Trainers</h5>
            </div>
          </div>
        </div>

      </div>

      <div className="row mb-4">

        <div className="col-md-6">

          <input
            className="form-control shadow"
            placeholder="Search Course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="col-md-3">

          <select
            className="form-select shadow"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >

            <option value="All">All Categories</option>
            <option value="Web">Web</option>
            <option value="Programming">Programming</option>

          </select>

        </div>

      </div>

      <div className="row">

        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      </div>

    </div>
  );
}

export default Dashboard;