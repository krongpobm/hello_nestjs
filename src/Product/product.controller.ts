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
    postproducts(@Body("ProductCode")ProductCode:string, @Body("ProductName") ProductName:string){
        this.productService.addProduct(ProductCode,ProductName)
    }

    @Delete("/:id")
    deleteProductById(@Param("id") id:string){
        console.log(`id: ${id}`)
        return this.productService.removeProductById(id)
    }
}

