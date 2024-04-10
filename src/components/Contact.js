import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  const contactContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(80vh - 50px)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    margin: "10px",
  };

  return (
    <div style={contactContainerStyle}>
      <h1 className="text-light text-center">Follow links below to reach out!</h1>
      <a href="https://www.linkedin.com/in/pallav-goswami-2107" rel="noreferrer" style={linkStyle}>
        LinkedIn
      </a>
      <a href="https://github.com/pallavgoswami" rel="noreferrer" style={linkStyle}>
        Github
      </a>
      <a href="https://leetcode.com/pallavgoswami/" rel="noreferrer" style={linkStyle}>
        LeetCode
      </a>
    </div>
  );
};

export default Contact;
