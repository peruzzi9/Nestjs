/* 
The client sends the server a TodoCreateDto when the client wants to create a new To Do item.
The TodoCreateDto class is received from the client when it requests to create a new To Do item 
*/
export class TodoCreateDto {  
    name: string;  
    description?: string;
}