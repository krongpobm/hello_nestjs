import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';  
import { ProductModule } from './product/product.module';
import { UserModule } from './User/user.module';
import { ProjectModule } from './project/project.module';
@Module({
  imports: [TodoModule, ProductModule, UserModule, ProjectModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
