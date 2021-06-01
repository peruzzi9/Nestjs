/* 
The server sends the client a list of TodoDto in the form of TodoListDto 
when the client requests all To Do items.
*/
import { TodoDto } from './todo.dto';
export class TodoListDto {  
    todos: TodoDto[];
}
