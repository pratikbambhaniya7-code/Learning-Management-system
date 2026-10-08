function CourseDetails({ course }) {
  return (
    <div className="mt-3">

      <hr />

      <h6 className="fw-bold text-secondary">
        Course Details
      </h6>

      <table className="table table-bordered">

        <tbody>

          <tr>
            <th>Course</th>
            <td>{course.title}</td>
          </tr>

          <tr>
            <th>Category</th>
            <td>{course.category}</td>
          </tr>

          <tr>
            <th>Trainer</th>
            <td>{course.trainer}</td>
          </tr>

          <tr>
            <th>Progress</th>
            <td>{course.progress}%</td>
          </tr>

        </tbody>

      </table>

      <button className="btn btn-primary w-100">
        View Course
      </button>

    </div>
  );
}

export default CourseDetails;