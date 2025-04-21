"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
let TaskService = class TaskService {
    tasks = [
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
    findById(id) {
        const task = this.tasks.find((task) => task.id === Number(id));
        if (!task) {
            throw new common_1.NotFoundException(`Task with id ${id} not found`);
        }
        return task;
    }
    create(dto) {
        const { title } = dto;
        const newTask = {
            id: this.tasks.length + 1,
            title: title,
            isCompleted: false,
        };
        this.tasks.push(newTask);
        return this.tasks;
    }
    update(id, dto) {
        const { title, isCompleted } = dto;
        const task = this.findById(id);
        task.title = title;
        task.isCompleted = isCompleted;
        return task;
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
//# sourceMappingURL=task.service.js.map