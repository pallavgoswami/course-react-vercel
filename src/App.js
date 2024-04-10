import React, { StrictMode } from "react";
import "./App.css";
import { Col, Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import AllCourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menus";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <StrictMode>
      <div className="bg">
        <Router>
          <ToastContainer />
          <Container>
            <Header />
            <Col>
              <Menus />
            </Col>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/add-course" element={<AddCourse />} exact />
              <Route path="/view-courses" element={<AllCourses />} exact />
              <Route path="/about" element={<About />} exact />
              <Route path="/contact" element={<Contact />} exact />
            </Routes>
          </Container>
        </Router>
      </div>
    </StrictMode>
  );
}

export default App;
