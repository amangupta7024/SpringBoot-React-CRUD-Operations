package com.crudAPI.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crudAPI.example.entity.Students;

@Repository
public interface StudentRepo extends JpaRepository<Students, Integer> {

}
