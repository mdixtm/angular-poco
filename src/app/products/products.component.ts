import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductsService } from './products-service';

@Component({
    styleUrls: ['./products.component.css'],
    templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {

    products: IProduct[] = [];
    errorMessage: "This is an eror message";

    constructor(private _productsService: ProductsService) {}

    ngOnInit(): void {
        this._productsService.getProductItems()
            .subscribe(products => {
                this.products = products;
            },error => this.errorMessage = <any>error);       
    }        
}