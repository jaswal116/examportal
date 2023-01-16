package com.jaswal;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BootNAngularApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BootNAngularApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting code");
		
	}

}
