import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    document.title = "View Courses";
  }, []);

  // Function to call the server to get all courses
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // Success
        console.log(response.data);
        toast.success("Courses have been loaded", {
          position: "bottom-center",
        });
        setCourses(response.data);
      },
      (error) => {
        // Error
        console.log(error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      }
    );
  };

  //calling loading course function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div>
        <h1 className="text-light text-center mb-4">All Courses</h1>
        <p className="text-light text-center">List of courses are as follows:</p>

        {courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />) : <p className="text-light text-center">No courses available at the moment</p>}
      </div>
    </div>
  );
};

export default Allcourse;
