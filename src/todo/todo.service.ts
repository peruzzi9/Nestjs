import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { TodoEntity } from './entity/todo.entity';
import { TodoListDto } from './dto/todo.list.dto';
import { TodoDto } from './dto/todo.dto';
import { toTodoDto } from '../shared/mapper';
import { TodoCreateDto } from './dto/todo.create.dto';
import { todos } from '../mock/todos.mock';
import { toPromise } from '../shared/utils';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TodoService {
  todos: TodoEntity[] = todos;

  /** to get all to do list  */
  async getAllTodo(): Promise<TodoListDto> {
    const todos = this.todos;
    return toPromise({ todos });
  }

  /** get one to do by id */
  async getOneTodo(id: string): Promise<TodoDto> {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new HttpException(
        `Todo item doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return toPromise(toTodoDto(todo));
    //return toPromise(todo);
  }

  /** create new todo item */
  async createTodo(todoDto: TodoCreateDto): Promise<TodoDto> {
    const { name, description } = todoDto;

    const todo: TodoEntity = {
      id: uuid(),
      name,
      description,
    };

    this.todos.push(todo);
    return toPromise(toTodoDto(todo));
  }

  /** update one to do by id */
  async updateTodo(todoDto: TodoDto): Promise<TodoListDto> {
    const todoIndex = this.todos.findIndex((todo) => todo.id == todoDto.id); 

    todos[todoIndex].name = todoDto.name;
    todos[todoIndex].description = todoDto.description;

    return toPromise({ todos });
  }

  /** delete one to do by id */
  async destoryTodo(id: string): Promise<TodoListDto> {
    const todos = this.todos.filter((todo) => todo.id != id);
    return toPromise({ todos });
  }
}
