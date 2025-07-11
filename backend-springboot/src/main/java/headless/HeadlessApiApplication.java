package headless;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@OpenAPIDefinition(
		info = @Info(
				title = "Employee Management API",
				version = "1.0",
				description = "Headless CRUD API built using Spring Boot + JPA + PostgreSQL"
		)
)

@SpringBootApplication
@EnableJpaAuditing
public class HeadlessApiApplication {

	public static void main(String[] args) {

		SpringApplication.run(HeadlessApiApplication.class, args);

		String encodedPassword = new BCryptPasswordEncoder().encode("admin123");
		System.out.println(encodedPassword);

	}

}
