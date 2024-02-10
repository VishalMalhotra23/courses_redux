import { combineReducers } from "redux";
import {
  FETCH_COURSES_SUCCESS,
  FETCH_COURSE_BY_ID_SUCCESS,
  ENROLL_COURSE_SUCCESS,
  MARK_COURSE_COMPLETED,
  UPDATE_ENROLLED_COURSES,
} from "./actions";

const courseReducer = (
  state = { courses: [], selectedCourse: null, enrolled: [], completed: [] },
  action
) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      if (state.courses.length < 1) {
        return { ...state, courses: action.payload };
      } else {
        return {
          ...state,
        };
      }

    case FETCH_COURSE_BY_ID_SUCCESS:
      return {
        ...state,
        selectedCourse: action.payload,
      };

    case ENROLL_COURSE_SUCCESS:
      const isEnrolled = state.enrolled.some(
        (enrolledCourse) => enrolledCourse.id === action.payload.id
      );
      const isCompleted = state.completed.some(
        (completedCourse) => completedCourse.id === action.payload.id
      );
      if (!isEnrolled && !isCompleted) {
        return {
          ...state,
          enrolled: [...state.enrolled, action.payload],
        };
      }
      return state;

    case MARK_COURSE_COMPLETED:
      return {
        ...state,
        completed: [...state.completed, action.payload],
      };
    case UPDATE_ENROLLED_COURSES:
      return {
        ...state,
        enrolled: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  course: courseReducer,
});
