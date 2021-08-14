import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return `Get Student by Id ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): FindStudentResponseDto {
    return JSON.stringify(body);
  }

  @Put('/:studenId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `Update student with Id ${studentId}`;
  }
}
