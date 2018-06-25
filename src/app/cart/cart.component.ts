import {Component, OnInit} from '@angular/core';
import { CartService } from './cart-service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products-service';
import { IProduct } from '../products/product';

@Component({
    templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit{

    constructor(private _cartService: CartService,
                private _productsService: ProductsService,
                private _route: ActivatedRoute) {}

    product : IProduct;
    errorMessage : "This is an error message";

    ngOnInit(): void
    {
        let productId = +this._route.snapshot.paramMap.get('productId');

        this._productsService.getProductItems()
        .subscribe(products => {
            this.product = products.find((product : IProduct) => 
            product.productId === productId);
        },error => this.errorMessage = <any>error); 
    }
}