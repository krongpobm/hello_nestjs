import { Injectable } from '@nestjs/common';
import { title } from 'process';
import { Product } from './Product.entity';

@Injectable()
export class ProductService {
    productArray:Product[] = []


    addProduct(name:string,lastname:string): void{
    console.log(`name: ${name}, lastname: ${lastname}`)
    const product = new Product();
    product.id = "1"
    product.name = name;
    product.lastname = lastname;
    this.productArray.push(product)
    }

    getProduct(): Product[]{
        return this.productArray
    }
}
