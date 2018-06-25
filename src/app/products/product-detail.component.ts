import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from './products-service';
import { IProduct } from './product';

@Component({
    styleUrls: ['./product-detail.component.css'],
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {

    products: IProduct[] = [];
    product: IProduct;
    errorMessage : "This is an error message";
    constructor(private _route: ActivatedRoute,
                private _productsService: ProductsService,
                private _router: Router) {}
    
    ngOnInit() {
        let productId = +this._route.snapshot.paramMap.get('productId');
        this._productsService.getProductItems()
        .subscribe(products => {
            this.product = products.find((product : IProduct) => 
            product.productId === productId);
        },error => this.errorMessage = <any>error); 
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}
