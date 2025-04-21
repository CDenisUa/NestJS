// Core
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Learn NestJS',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Build NestJS',
      isCompleted: true,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: string) {
    const task = this.tasks.find((task) => task.id === Number(id));

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }
}
