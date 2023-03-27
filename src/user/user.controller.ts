import { Controller, Post,Get } from '@nestjs/common';
import { Body, Delete, Param, UseFilters } from '@nestjs/common/decorators';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private UserService:UserService){

    }

    @Get()
    getUsers(){
        return ["Hello World"]
    }

    @Post()
    postUsers(@Body("Username") Username:string, @Body("Lastname") lastname:string){
        console.log(`name: ${name}, lastname: ${lastname}`)
        }

    @Delete("/:id")
    DeleteUserById(@Param("id") id:string){
        console.log(`id: ${id}`)
        return (`id is ${id}`)
    }
}
