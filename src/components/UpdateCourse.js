import React, { useState } from "react";
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const UpdateCourse = ({ course, updateCourse }) => {
  const [updatedCourse, setUpdatedCourse] = useState({ ...course });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedCourse({ ...updatedCourse, [name]: value });
  };

  const updateCourseData = () => {
    axios
      .put(`${base_url}/courses/${updatedCourse.id}`, updatedCourse)
      .then((_response) => {
        toast.success("Course updated successfully");
        updateCourse(updatedCourse); // Update the course in the parent component
      })
      .catch((_error) => {
        toast.error("Course not updated, server problem");
      });
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardTitle className="font-weight-bold">
          <strong>Update Course</strong>
        </CardTitle>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={updatedCourse.title}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={updatedCourse.description}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Container className="text-center">
            <Button color="primary" onClick={updateCourseData}>
              Update
            </Button>
          </Container>
        </Form>
      </CardBody>
    </Card>
  );
};

export default UpdateCourse;

