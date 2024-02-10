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
      return { ...state, courses: action.payload };

    case FETCH_COURSE_BY_ID_SUCCESS:
      return {
        ...state,
        selectedCourse: action.payload,
      };

    case ENROLL_COURSE_SUCCESS:
      return {
        ...state,
        enrolled: [...state.enrolled, action.payload],
      };

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
