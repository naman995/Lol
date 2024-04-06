import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // Import CommonModule for common Angular directives like *ngFor, *ngIf, etc.
  ],
  exports: [],
})
export class ColorModule {
  mainBodyColor: string = '#3B444B';
}
