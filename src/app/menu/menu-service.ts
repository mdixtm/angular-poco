import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IMenuItem } from "./menu-item"; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class MenuService {
    private _menuItemsUrl = './api/menu/menu.json';

    constructor (private _http: HttpClient) {}

    getMenuItems(): Observable<IMenuItem[]> {
        return this._http.get<IMenuItem[]>(this._menuItemsUrl)
            .do(data => console.log('Those are menu items' + JSON.stringify(data)))
            .catch(this.handleError);    
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}