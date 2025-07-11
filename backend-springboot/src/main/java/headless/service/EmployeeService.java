package headless.service;

import headless.entity.Employee;
import headless.repository.EmployeeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public Employee createEmployee(Employee employee){
        Employee saved = employeeRepository.save(employee);
        log.info("----> Created Date :{}", saved.getCreatedAt());
        log.info("----> Updated Date :{}", saved.getUpdatedAt());
        return saved;
    }

    public Optional<Employee> getEmployeeById(Long id){
        return employeeRepository.findById(id);
    }

    public Optional<Employee> updateEmployee(Long id, Employee employeeDetails){
        return employeeRepository.findById(id).map(employee -> {
            employee.setName(employeeDetails.getName());
            employee.setDesignation(employeeDetails.getDesignation());
            employee.setSalary(employeeDetails.getSalary());
            employee.setUpdatedAt(LocalDateTime.now());
            return employeeRepository.save(employee);
        });
    }

    public boolean deleteEmployee(Long id){
        Optional<Employee> employee = employeeRepository.findById(id);
        if(employee.isPresent()){
            employeeRepository.deleteById(id);
            return true;
        }

        return false;
    }


}
