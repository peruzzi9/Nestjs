/* 
* definition of todo entity class 
* which will we use in our project 
? and which will be same as database 
! and here we will define TypeORM definition 
*/
export class TodoEntity { 
    id: string;  
    name: string;  
    description?: string;
}