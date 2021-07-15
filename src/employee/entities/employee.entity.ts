import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../../project/entities/project.entity';

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  firstName: string;
  @Field()
  @Column()
  lastName: string;
  @Field()
  @Column()
  designation: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;
  @ManyToOne(() => Project, (project) => project.employees)
  @Field(() => Project)
  project: Project;
  @Column()
  @Field()
  projectId: string;
}