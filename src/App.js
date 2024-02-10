import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CourseListing from "./components/CourseListing";
import DescriptionPage from "./components/DescriptionPage";
import ActiveCourses from "./components/ActiveCourses";
import CompletedCourses from "./components/CompletedCourses";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/description/:id" element={<DescriptionPage />} />
        <Route path="/mycourses" element={<ActiveCourses />} />
        <Route path="/mycourses/completed" element={<CompletedCourses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const NotFound = () => {
  return <div>404 Not Found</div>;
};

export default App;
