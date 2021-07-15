import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { ProjectService } from '../project/project.service';
import { Project } from '../project/entities/project.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private projectService: ProjectService,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
    // const emp: Employee = new Employee();
    // emp.id = 'asdasdas';
    // emp.firstName = 'vijay';
    // emp.lastName = 'Doe';
    // emp.designation = 'Engineer';
    // return [emp];
  }

  async findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne(id);
  }

  async create(employee: EmployeeCreateDTO): Promise<Employee> {
    const emp = this.employeeRepository.create(employee);
    return this.employeeRepository.save(emp);
  }

  async getProject(id: string): Promise<Project> {
    return this.projectService.findOne(id);
  }
}
