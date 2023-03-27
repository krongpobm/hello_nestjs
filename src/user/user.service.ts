import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class UserService {
    userArray:User[] = []


    addUser(Username:string, Lastname:string, Gmail:string, Iduser:string): void{
    console.log(`Username: ${Username}, Lastname: ${Lastname}, Gmail: ${Gmail}, Iduser: ${Iduser}`)
    const user = new User();
    user.id = uuid();
    user.Username = Username;
    user.Lastname = Lastname;
    user.Gmail = Gmail;
    user.Iduser = Iduser;
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
