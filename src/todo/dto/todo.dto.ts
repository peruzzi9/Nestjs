/* The server sends the client a TodoDto when the client requests or updates a single To Do item */
export class TodoDto {  
    id: string; 
    name: string; 
    description?: string;
}