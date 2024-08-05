package com.crudAPI.example.controller;

import org.springframework.web.bind.annotation.RestController;

import com.crudAPI.example.entity.Students;
import com.crudAPI.example.service.StudentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/addStudent")
	@CrossOrigin(origins = "http://localhost:4200")
	public Students addStudent(@RequestBody Students students) {
		return studentService.addStudent(students);
	}
	
	@GetMapping("/getStudents")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Students> getAllStudents(){
		return studentService.getAllStudents();
	}
	
	@PostMapping("/updateStudent")
	@CrossOrigin(origins = "http://localhost:4200")
	public Students updateStudent(@RequestBody Students students) {
		return studentService.udpateStudent(students);
	}
	
	@GetMapping("/deleteStudent/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Boolean deleteStudent(@PathVariable int id) {
		return studentService.deleteStudent(id);
	}
	
	

}
