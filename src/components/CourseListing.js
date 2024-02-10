import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoursesSuccess } from "../redux/actions";
import NavBar from "./NavBar";
import "./css/courselisting.css";

const CourseListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const courses = useSelector((state) => state.course.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursesSuccess());
  }, [dispatch]);

  const filteredCourses = Array.isArray(courses)
    ? courses.filter((course) => {
        return (
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    : [];

  return (
    <div>
      <NavBar />
      <div className="course-listing">
        <div className="course-heading">
          <h3>Course List</h3>

          <div className="course-search">
            <span className="course-search-heading">Search:</span>
            <input
              type="text"
              placeholder="Search your course.."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="course-cards">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img
                src={course.url}
                alt={course.name}
                className="course-image"
              />
              <div className="course-details">
                <h3>{course.name}</h3>
                <p>
                  <strong>Instructor:</strong> {course.instructor}
                </p>
                <p>
                  <strong>Description:</strong> {course.description}
                </p>
                <p>
                  <strong>Enrollment Status:</strong> {course.enrollmentStatus}
                </p>
                <p className="button">
                  <Link
                    to={`/description/${course.id}`}
                    className="view-details-button"
                  >
                    View Details
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseListingPage;
