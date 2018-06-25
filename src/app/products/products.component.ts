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
                private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit(): void {
        this._productsService.getProductItems()
        .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        },error => this.errorMessage = <any>error); 

        this._route.params.subscribe(params => {
            let categoryId = +params['categoryId'];
            if (categoryId > 0) {
                this.filteredProducts = this.performFilterByCategory(categoryId);
            }
        },error => this.errorMessage = <any>error)
    }
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts= this.listFilter ? this.performFilterByString(this.listFilter) : this.products;
    }

    performFilterByCategory(categoryId: number) : IProduct[] { 
        return this.products.filter((product : IProduct) => 
            product.categoryId === categoryId);
    }

    performFilterByString(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    addToCart(productId: number) {
        this._router.navigate(['/cart', productId]);
    }
}