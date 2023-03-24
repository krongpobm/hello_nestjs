import { Controller, Post,Get } from '@nestjs/common';
import { Body, Delete, Param } from '@nestjs/common/decorators';

@Controller('user')
export class UserController {

    @Get()
    getUsers(){
        return ["Hello World"]
    }

    @Post()
    postUsers(@Body("Username") Username:string, @Body("Lastname") lastname:string){
        console.log(`Username: ${Username}, Lastname: ${lastname}`)
    }

    @Delete("/:id")
    DeleteUserById(@Param("id") id:string){
        console.log(`id: ${id}`)
        return (`id is ${id}`)
    }
}
