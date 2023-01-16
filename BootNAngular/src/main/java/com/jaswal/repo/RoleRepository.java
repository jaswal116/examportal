package com.jaswal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jaswal.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
