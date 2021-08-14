import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from 'src/student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
    return `Get all student that belong to teacher with Id ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return `Update student Id ${studentId} of teacher ${teacherId}`;
  }
}
