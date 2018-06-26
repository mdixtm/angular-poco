import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
   imports: [
     CommonModule
  ],
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent,
    CommonModule
  ]
})
export class SharedModule { }