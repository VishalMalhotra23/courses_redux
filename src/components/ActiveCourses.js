import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import { markCourseCompleted, updateEnrolledCourses } from "../redux/actions";
import "./css/activecourses.css";

const ActiveCourses = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.course.enrolled);
  const navigate = useNavigate();

  const handleMarkCompleted = (course) => {
    dispatch(markCourseCompleted(course));
    const updatedEnrolledCourses = enrolledCourses.filter(
      (enrolledCourse) => enrolledCourse.id !== course.id
    );
    dispatch(updateEnrolledCourses(updatedEnrolledCourses));
    navigate("/mycourses/completed");
  };

  return (
    <div>
      <NavBar />
      <div className="course-listing">
        <div className="course-heading">
          <h3>Active Courses</h3>
        </div>
        <div className="course-cards">
          {enrolledCourses.map((course) => (
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
                <button
                  className="mark-completed-button"
                  onClick={() => handleMarkCompleted(course)}
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveCourses;
