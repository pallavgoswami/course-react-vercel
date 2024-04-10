import React, { useState } from "react";
import { Card, CardBody, CardSubtitle, CardText, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import UpdateCourse from "./UpdateCourse";

const Course = ({ course, update }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (_response) => {
        toast.success("Course deleted");
        update(id);
      },
      (_error) => {
        toast.error("Course not deleted, server problem");
      }
    );
  };

  return (
    <div className="mb-3">
      <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">
          <strong>{course.title}</strong>
        </CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger" onClick={() => deleteCourse(course.id)}>
            Delete
          </Button>
          <Button color="warning ms-2" onClick={() => setShowUpdateForm(!showUpdateForm)}>
            Update
          </Button>
        </Container>
      </CardBody>
      {showUpdateForm && <UpdateCourse course={course} updateCourse={update} />}
    </Card>
    </div>    
  );
};

export default Course;
