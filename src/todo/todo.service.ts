import { Injectable, Param, ParseIntPipe } from '@nestjs/common';

@Injectable()
export class TodoService {
  todo = [
    {
      id: 1,
      name: 'Some todo 1',
      is_completed: 0,
    },
    {
      id: 2,
      name: 'Some todo 2',
      is_completed: 0,
    },
  ];

  getAll(): { id: number }[] {
    return this.todo;
  }

  findOne(
      @Param('id', ParseIntPipe) id: number,
  ): { name: string; id: number } | null {
    return this.todo.find((todo) => todo.id === id);
  }
}
