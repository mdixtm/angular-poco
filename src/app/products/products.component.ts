import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductsService } from './products-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    styleUrls: ['./products.component.css'],
    templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {

    products: IProduct[] = [];
    filteredProducts: IProduct[];
    errorMessage: "This is an eror message";

    constructor(private _productsService: ProductsService,
                private _route: ActivatedRoute) {}

    ngOnInit(): void {
        this._productsService.getProductItems()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            },error => this.errorMessage = <any>error); 
            
        this._route.params.subscribe(params => {
            let categoryId = params['categoryId'];
            if (categoryId > 0) {
                this.filteredProducts = this.performFilter(categoryId);
            }
        })
    }
    
    performFilter(categoryId: number) : IProduct[] { 
        return this.products.filter((product : IProduct) => 
            product.categoryId == categoryId);
    }
}