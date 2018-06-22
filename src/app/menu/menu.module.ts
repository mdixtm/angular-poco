import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu-service';

@NgModule({
  imports: [
    CommonModule,
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