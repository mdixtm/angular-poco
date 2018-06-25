import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuModule} from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/product.module';
import { CartModule } from './cart/cart.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'cart', component: CartComponent},
    ]),
    MenuModule,
    ProductsModule,
    CartModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
