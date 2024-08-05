import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from 'axios'

function AddStudent() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dept: "",
    age : ""
});


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    const response = await axios.post("http://localhost:8082/addStudent",formData)
    .then(
        alert("Student Added Successfully")
    ).catch(
        alert("Error is comming")
    )
  }

  return (
    <>
      <h1> Add student </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>id</Form.Label>
          <Form.Control type="text" placeholder="id" name="id" onChange={handleChange} />
        </Form.Group>

        <br></br>
        <br></br>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
        </Form.Group>

        <br></br>
        <br></br>
        <Form.Group className="mb-3">
          <Form.Label>department</Form.Label>
          <Form.Control type="text" placeholder="Department" name= "dept" onChange={handleChange} />
        </Form.Group>

        <br></br>
        <br></br>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Age" name="age" onChange={handleChange} />
        </Form.Group>
   

      <Form.Group className="mb-3">
          
          <Form.Control type="submit" value={"submit"} />
        </Form.Group>

        </Form>
    </>
  );
}

export default AddStudent;
