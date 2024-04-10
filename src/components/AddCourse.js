import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Row, Col } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginTop: "100px",
  };
  useEffect(() => {
    document.title = "Add Courses";
  }, []);

  const [course, setCourse] = useState({});

  const handleForm = (e) => {
    e.preventDefault();
    console.log(course);
    postDataToServer(course);
  };

  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("Course added successfully", {
          position: "bottom-center"
        })
        console.log("success");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="text-center text-light mb-4" style={linkStyle}>Fill Course Details!</h1>
            <Form onSubmit={handleForm}>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Enter ID here"
                  name="userId"
                  id="userId"
                  onChange={(e) => {
                    setCourse({ ...course, id: e.target.value });
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Input
                  type="text"
                  placeholder="Enter title here"
                  id="title"
                  onChange={(e) => {
                    setCourse({ ...course, title: e.target.value });
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Input
                  type="textarea"
                  placeholder="Enter description here"
                  id="description"
                  style={{ height: 150 }}
                  onChange={(e) => {
                    setCourse({ ...course, description: e.target.value });
                  }}
                />
              </FormGroup>

              <Container className="text-center">
                <Button type="submit" color="success">
                  Add Course
                </Button>
                <Button color="warning ms-2">Clear Course</Button>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddCourse;
