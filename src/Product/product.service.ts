import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './Product.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class ProductService {
    productArray:Product[] = []


    addProduct(ProductCode:string,ProductName:string): void{
    console.log(`ProductCode: ${ProductCode}, ProductName: ${ProductName}`)
    const product = new Product();
    product.id = uuid();
    product.ProductCode = ProductCode;
    product.ProductName = ProductName;
    this.productArray.push(product)
    }
    getProduct(){
        return this.productArray
    }

    removeProductById(id:string){
        
        const found = this.productArray.find(item=> item.id === id)
        if (!found){
            throw new NotFoundException(`Product with ${id} not found`)
        }

        this.productArray = this.productArray.filter(item=>{return item.id !== id})
        return this.productArray
    }
}
