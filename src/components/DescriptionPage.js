import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseByIdSuccess, enrollCourseSuccess } from "../redux/actions";
import NavBar from "./NavBar";
import "./css/descriptionpage.css";

const DescriptionPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.course.selectedCourse);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCourseByIdSuccess(id));
  }, [dispatch, id]);

  const handleEnrollNow = () => {
    dispatch(enrollCourseSuccess(courseData));
    navigate("/mycourses");
  };

  return (
    <div>
      {!courseData ? (
        <div>Loading...</div>
      ) : (
        <div>
          <NavBar />
          <div className="card-container">
            <div className="card">
              <div className="card-image">
                <img src={courseData.url} alt={courseData.name} />
              </div>
              <div className="card-details">
                <h2>{courseData.name}</h2>
                <p>
                  <strong>Instructor:</strong> {courseData.instructor}
                </p>
                <p>
                  <strong>Description:</strong> {courseData.description}
                </p>
                <p>
                  <strong>Enrollment Status:</strong>{" "}
                  {courseData.enrollmentStatus}
                </p>
                <p>
                  <strong>Duration:</strong> {courseData.duration}
                </p>
                <p>
                  <strong>Schedule:</strong> {courseData.schedule}
                </p>
                <p>
                  <strong>Location:</strong> {courseData.location}
                </p>
                <p>
                  <strong>Prerequisites:</strong>{" "}
                  {courseData.prerequisites.join(", ")}
                </p>
                <h3>Syllabus</h3>
                <ul>
                  {courseData.syllabus.map((item) => (
                    <li key={item.week}>
                      <strong>Week {item.week}:</strong> {item.topic} -{" "}
                      {item.content}
                    </li>
                  ))}
                </ul>
                <button className="enroll-button" onClick={handleEnrollNow}>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionPage;
