import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskService {
    private tasks;
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
    create(dto: CreateTaskDto): {
        id: number;
        title: string;
        isCompleted: boolean;
    }[];
    update(id: string, dto: UpdateTaskDto): {
        id: number;
        title: string;
        isCompleted: boolean;
    };
}
