import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class UserService {
    userArray:User[] = []


    addUser(Username:string, Lastname:string, Email:string, Iduser:string, Password:string): void{
    console.log(`Username: ${Username}, Lastname: ${Lastname}, Email: ${Email}, Iduser: ${Iduser}, Password: ${Password}`)
    const user = new User();
    user.id = uuid();
    user.Username = Username;
    user.Lastname = Lastname;
    user.Email = Email;
    user.Iduser = Iduser;
    user.Password = Password;
    this.userArray.push(user) 
    }
    getUser(){
        return this.userArray
    }

    removeUserById(id:string){
        
        const found = this.userArray.find(item=> item.id === id)
        if (!found){
            throw new NotFoundException(`User with ${id} not found`)
        }

        this.userArray = this.userArray.filter(item=>{return item.id !== id})
        return this.userArray
    }
}
