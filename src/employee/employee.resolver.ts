import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Project } from '../project/entities/project.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employee') employee: EmployeeCreateDTO) {
    return this.employeeService.create(employee);
  }

  @Query(() => Employee)
  findOne(@Args('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @ResolveField(() => Project)
  async project(@Parent() employee: Employee) {
    // method name should be like in employee entity
    return await this.employeeService.getProject(employee.projectId);
  }
}
