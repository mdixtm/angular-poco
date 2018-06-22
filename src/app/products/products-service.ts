import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IProduct } from "./product"; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductsService {
    private _productsUrl = './api/products/products.json';

    constructor (private _http: HttpClient) {}

    getProductItems(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productsUrl)
            .do(data => console.log('Those are products items' + JSON.stringify(data)))
            .catch(this.handleError);    
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}