// Core
import { Controller, Get, Param } from '@nestjs/common';
// Services
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('all')
  findAll() {
    return this.taskService.findAll();
  }

  @Get('by-id/:id')
  findById(@Param('id') id: string) {
    return this.taskService.findById(id);
  }
}
