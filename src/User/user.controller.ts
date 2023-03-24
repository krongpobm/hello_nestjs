import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';

@Controller('user')
export class UserController {
    
    @Get()
    getusers(){
        return [1,2,3]
    }
}
