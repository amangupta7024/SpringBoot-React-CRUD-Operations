package com.crudAPI.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Students {
	
	@Id
	private int id;
	private String name;
	private int age;
	private String dept;
	
	
	public Students() {
		
	}
	public Students(int id, String name, int age, String dept) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.dept = dept;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	

}
