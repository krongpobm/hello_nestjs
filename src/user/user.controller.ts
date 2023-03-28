import { Controller, Post,Get } from '@nestjs/common';
import { Body, Delete, Param, UseFilters } from '@nestjs/common/decorators';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private UserService:UserService){

    }

    @Get()
    getUsers(){
        return this.UserService.getUser()
    }

    @Post()
    postUsers(@Body("Username") Username:string, @Body("Lastname") Lastname:string, @Body("Email") Email:string, @Body("Iduser") Iduser:string, @Body("Password") Password:string){
        this.UserService.addUser(Username,Lastname,Email,Iduser,Password)
        }

    @Delete("/:id")
    DeleteUserById(@Param("id") id:string){
        console.log(`id: ${id}`)
        return this.UserService.removeUserById(id)
    }
}
