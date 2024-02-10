import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import "./css/activecourses.css";

const CompletedCourses = () => {
  const completedCourse = useSelector((state) => state.course.completed);

  return (
    <div>
      <NavBar />
      <div className="course-listing">
        <div className="course-heading">
          <h3>Completed Courses</h3>
        </div>
        <div className="course-cards">
          {completedCourse.map((course) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedCourses;
