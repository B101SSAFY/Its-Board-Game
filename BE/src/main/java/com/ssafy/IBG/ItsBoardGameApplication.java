package com.ssafy.IBG;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class ItsBoardGameApplication {

	public static final String APPLICATION_LOCATIONS = "spring.config.location=" +
			"classpath:application.yml, " +
			"classpath:aws.yml";

	public static void main(String[] args) {
		new SpringApplicationBuilder(ItsBoardGameApplication.class).properties(APPLICATION_LOCATIONS)
				.run(args);
	}

}
