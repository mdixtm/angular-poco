import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu-service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],

  exports: [
    MenuComponent
  ],

  declarations: [
    MenuComponent
  ],

  providers: [
    MenuService
  ]
})
export class MenuModule { }