import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getAll(): { id: number }[] {
        return this.todoService.getAll();
    }

    @Get(':id')
    findOne(
        @Param('id', ParseIntPipe) id: number,
    ): { name: string; id: number } | null {
        return this.todoService.findOne(id);
    }
}
