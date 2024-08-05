import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({
    id: "",
    name: "",
    dept: "",
    age: ""
  });
  const [isFormOpen, setFormOpen] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const baseURL = "http://localhost:8082/getStudents";
    try {
      const response = await axios.get(baseURL);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const deleteStudent = async(id) => {
    const deleteURL = "http://localhost:8082/deleteStudent/" + id
    try {
      await axios.delete(deleteURL);
      // Update the state after successful deletion
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleUpdate = (student) => {
    setSelectedStudent(student);
    setFormOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedStudent({ ...selectedStudent, [name]: value });
  };

  const updateStudent = async (e) => {
    e.preventDefault();
    const baseURL = "http://localhost:8082/updateStudent";
    try {
      await axios.post(baseURL, selectedStudent);
      setFormOpen(false);
      fetchStudents();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <>
      <h1>This is your students</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.dept}</td>
              <td>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                <button onClick={() => handleUpdate(student)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      {isFormOpen && (
        <Form onSubmit={updateStudent}>
          <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="ID"
              name="id"
              value={selectedStudent.id}
              onChange={handleChange}
              readOnly
            />
          </Form.Group>

          <br />
          <br />
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={selectedStudent.name}
              onChange={handleChange}
            />
          </Form.Group>

          <br />
          <br />
          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Department"
              name="dept"
              value={selectedStudent.dept}
              onChange={handleChange}
            />
          </Form.Group>

          <br />
          <br />
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Age"
              name="age"
              value={selectedStudent.age}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="submit" value="Submit" />
          </Form.Group>
        </Form>
      )}
    </>
  );
}

export default ViewStudents;
