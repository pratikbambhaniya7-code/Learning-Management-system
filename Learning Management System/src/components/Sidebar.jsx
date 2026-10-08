function Sidebar() {

    return (

        <div
            className="bg-dark text-white p-3"
            style={{ minHeight: "100vh" }}
        >

            <h3 className="text-center mb-4">
                LMS
            </h3>

            <ul className="nav flex-column">

                <li className="nav-item mb-3">
                    <a
                        href="#"
                        className="nav-link text-white"
                    >
                        🏠 Dashboard
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a
                        href="#"
                        className="nav-link text-white"
                    >
                        📚 Courses
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a
                        href="#"
                        className="nav-link text-white"
                    >
                        👨‍🎓 Students
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a
                        href="#"
                        className="nav-link text-white"
                    >
                        📈 Progress
                    </a>
                </li>

                <li className="nav-item mb-3">
                    <a
                        href="#"
                        className="nav-link text-white"
                    >
                        ⚙ Settings
                    </a>
                </li>

            </ul>

        </div>

    );
}

export default Sidebar;