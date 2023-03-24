import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';  
import { ProductModule } from './product/product.module';

@Module({
  imports: [TodoModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
