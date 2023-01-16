package com.jaswal.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jaswal.model.Role;
import com.jaswal.model.User;
import com.jaswal.model.UserRole;
import com.jaswal.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/")
	public ResponseEntity<User> createUser(@RequestBody User user) {

		Set<UserRole> userRoles = new HashSet<>();

		Role role1 = new Role();
		role1.setRoleId(52L);
		role1.setRolename("Normal");

		UserRole userRole = new UserRole();
		userRole.setRole(role1);
		userRole.setUser(user);

		userRoles.add(userRole);

		User local;
		try {
			local = userService.createUser(user, userRoles);
			return new ResponseEntity<>(local, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
	}
	
	@GetMapping("/{username}")
	public ResponseEntity<User> getUser(@PathVariable("username") String username) {
		User local;
		try {
			local = userService.getUserByUsername(username);
			return new ResponseEntity<>(local, HttpStatus.FOUND);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable("userId") String userId){
		try {
			userService.deleteUser(Long.valueOf(userId));
			return  ResponseEntity.noContent().build();
		}  catch (Exception e) {
			e.printStackTrace();
			return  ResponseEntity.notFound().build();
		}
	}
}
