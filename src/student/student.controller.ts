import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById() {
    return 'Get student by Id';
  }

  @Post()
  createStudent() {
    return 'Create student';
  }

  @Put('/:studenId')
  updateStudent() {
    return 'Update student';
  }
}
