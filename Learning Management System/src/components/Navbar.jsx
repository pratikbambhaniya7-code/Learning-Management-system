function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{
        background: "linear-gradient(90deg,#0d6efd,#6610f2)"
      }}
    >
      <div className="container-fluid">

        <a className="navbar-brand fw-bold fs-4" href="#">
          🎓 LMS Portal
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          <form className="d-flex ms-auto me-3">

            <input
              className="form-control"
              type="search"
              placeholder="Search Course..."
            />

          </form>

          <button className="btn btn-warning fw-bold">
            Login
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;