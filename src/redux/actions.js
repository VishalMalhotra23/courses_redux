import { Courses } from "../data/data";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
export const ENROLL_COURSE_SUCCESS = "ENROLL_COURSE_SUCCESS";
export const MARK_COURSE_COMPLETED = "MARK_COURSE_COMPLETED";
export const FETCH_COURSE_BY_ID_SUCCESS = "FETCH_COURSE_BY_ID_SUCCESS";
export const UPDATE_ENROLLED_COURSES = "UPDATE_ENROLLED_COURSES";

export const fetchCoursesSuccess = () => ({
  type: FETCH_COURSES_SUCCESS,
  payload: Courses,
});

export const fetchCourseByIdSuccess = (id) => {
  return (dispatch, getState) => {
    const course = Courses[id - 1];
    if (course) {
      dispatch({ type: FETCH_COURSE_BY_ID_SUCCESS, payload: course });
    } else {
    }
  };
};

export const enrollCourseSuccess = (course) => ({
  type: ENROLL_COURSE_SUCCESS,
  payload: course,
});

export const markCourseCompleted = (course) => ({
  type: MARK_COURSE_COMPLETED,
  payload: course,
});
export const updateEnrolledCourses = (updatedEnrolledCourses) => ({
  type: UPDATE_ENROLLED_COURSES,
  payload: updatedEnrolledCourses,
});
