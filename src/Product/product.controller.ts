import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { last } from 'rxjs';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){

    }

    @Get()
    getproducts(){
        return this.productService.getProduct()
    }

    @Post()
    postproducts(@Body("name") name:string, @Body("lastname") lastname:string){
        this.productService.addProduct(name,lastname)
    }

    @Delete("/:id")
    deleteProductById(@Param("id") id:string){
        console.log(`id: ${id}`)
        return `id is ${id}`
    }
}

