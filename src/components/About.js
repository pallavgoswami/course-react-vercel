import React, { useEffect } from "react";

const About = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginTop: "200px",

  };
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-light" style={linkStyle}>Third Year Internship Project made using React and Spring Boot.</h1>
      <p className="text-light">COURSEPEDIA is a dynamic learning platform that seamlessly combines the power of React.js on the frontend and Spring Boot on the backend. With a robust foundation of RESTful API architecture, our app enables you to explore, create, update, and delete courses with ease.</p>
    </div>
  );
};

export default About;
