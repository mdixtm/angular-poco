import { Injectable } from "@angular/core";
import { ICartItem } from "./cart-item";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class CartService {

    private _cartItemsUrl = './api/cart/cart.json';

    constructor (private _http: HttpClient) {}

    getCartItems(): Observable<ICartItem[]> {
        return this._http.get<ICartItem[]>(this._cartItemsUrl)
            .do(data => console.log('Those are cart items' + JSON.stringify(data)))
            .catch(this.handleError);    
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}