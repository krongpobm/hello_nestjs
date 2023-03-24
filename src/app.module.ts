import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';  
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TodoModule, ProductModule, UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
