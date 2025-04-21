import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    findAll(): {
        id: number;
        title: string;
        isCompleted: boolean;
    }[];
    findById(id: string): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
}
