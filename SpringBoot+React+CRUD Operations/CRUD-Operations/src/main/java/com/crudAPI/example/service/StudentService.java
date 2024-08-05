package com.crudAPI.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crudAPI.example.entity.Students;
import com.crudAPI.example.repository.StudentRepo;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepo studentRepo;


	public Students addStudent(Students student) {
		return studentRepo.save(student);
	}
	
	public List<Students> getAllStudents() {
		return studentRepo.findAll();
	}
	
	public Students udpateStudent(Students updatedStudent) {
		Optional<Students> student1 = studentRepo.findById(updatedStudent.getId());
		Students student = student1.get();
		student.setAge(updatedStudent.getAge());
		student.setDept(updatedStudent.getDept());
		student.setName(updatedStudent.getName());
		
		return studentRepo.save(student);
		
	}
	
	public Boolean deleteStudent(int id) {
		studentRepo.deleteById(id);
		return true;
	}
}
