import CourseDetails from "./CourseDetails";

function CourseCard({ course }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">

      <div className="card h-100 border-0 shadow-lg rounded-4">

        <div className="card-body">

          <h4 className="fw-bold text-primary">
            {course.title}
          </h4>

          <p>
            <strong>Category :</strong> {course.category}
          </p>

          <p>
            <strong>Trainer :</strong> {course.trainer}
          </p>

          <div className="progress mb-3" style={{ height: "22px" }}>

            <div
              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
              style={{ width: `${course.progress}%` }}
            >
              {course.progress}%
            </div>

          </div>

          <CourseDetails course={course} />

        </div>

      </div>

    </div>
  );
}

export default CourseCard;