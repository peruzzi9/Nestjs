import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TodoListDto } from './dto/todo.list.dto';
import { TodoDto } from './dto/todo.dto';
import { TodoCreateDto } from './dto/todo.create.dto';
import { TodoService } from './todo.service';
import { toPromise } from '../shared/utils';

@Controller('api/todos')
export class TodoController { 
  constructor(private readonly todoService: TodoService) {}

  /** to get all to do list  */
  @Get()
  async findAll(): Promise<TodoListDto> {    
    const todos = await this.todoService.getAllTodo();        
     return toPromise(todos); 
  }

 /** get one to do by id */
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TodoDto> {
    return await this.todoService.getOneTodo(id);
  }
 
  /** create new todo item */
  @Post() 
  async create(@Body() todoCreateDto: TodoCreateDto): Promise<TodoDto> {
    return await this.todoService.createTodo(todoCreateDto);
  }

  /** update one to do by id */
  @Put()
  async update(
    @Body() todoDto: TodoDto,
  ): Promise<TodoListDto> {
    return await this.todoService.updateTodo(todoDto);
  }


 /** delete one to do by id */
  @Delete(':id')
  async destory(@Param('id') id: string): Promise<TodoListDto> {
    return await this.todoService.destoryTodo(id);
  } 
}
