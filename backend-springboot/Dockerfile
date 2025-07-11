# Use base Java image
FROM openjdk:17-jdk-alpine

# Set working directory in the container
WORKDIR /app

# Copy the jar file from the target folder
COPY target/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
