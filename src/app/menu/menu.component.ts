import {Component, OnInit} from '@angular/core';
import { MenuService } from './menu-service';
import { IMenuItem } from './menu-item';

@Component({
    selector: 'header-menu',
    templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit{

    menuItems: IMenuItem[] = [];
    errorMessage: "This is an eror message";
    constructor(private _menuService: MenuService) {}

    ngOnInit(): void {
        this._menuService.getMenuItems()
            .subscribe(menuItems => {
                this.menuItems = menuItems;
            },error => this.errorMessage = <any>error);
    }
}