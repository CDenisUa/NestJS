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
}
