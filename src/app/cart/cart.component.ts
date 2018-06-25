import {Component, OnInit} from '@angular/core';
import { CartService } from './cart-service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products-service';
import { IProduct } from '../products/product';
import { ICartItem } from './cart-item';

@Component({
    templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit{

    constructor(private _cartService: CartService,
                private _productsService: ProductsService,
                private _route: ActivatedRoute) {}

    product : IProduct;
    cartItems : ICartItem[];
    errorMessage : "This is an error message";

    ngOnInit(): void
    {
        let productId = +this._route.snapshot.paramMap.get('productId');

        this._productsService.getProductItems()
        .subscribe(products => {
            this.product = products.find((product : IProduct) => 
            product.productId === productId);
        },error => this.errorMessage = <any>error); 

        this._cartService.getCartItems()
        .subscribe(cartItems => {
            this.cartItems = cartItems;
        },error => this.errorMessage = <any>error); 
    }
}