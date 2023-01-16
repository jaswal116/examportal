package com.jaswal.service;

import java.util.Set;

import com.jaswal.model.User;
import com.jaswal.model.UserRole;

public interface UserService {
	
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;

	public User getUserByUsername(String username) throws Exception;
	
	public void deleteUser(Long userId) throws Exception;
	
	
}
