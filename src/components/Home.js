import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginTop: "150px",
  };
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-light" style={linkStyle}>Hello Visitor!</h1>
      <p className="text-light">This is developed by Pallav Goswami for learning purposes. It's backend is on Spring Boot and frontend on ReactJS.</p>
      <Container>
        <Link to="/add-course">
        <Button color="primary">Start Using</Button>
        </Link>        
      </Container>
    </div>
  );
};

export default Home;






