import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <mat-form-field>
    <input matInput
           placeholder="Choose a date"
           [satDatepicker]="picker"
           [value]="date">
    <sat-datepicker #picker [rangeMode]="true">
    </sat-datepicker>
    <sat-datepicker-toggle matSuffix [for]="picker"></sat-datepicker-toggle>
  </mat-form-field>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  date = { begin: new Date(2018, 7, 5), end: new Date(2018, 7, 25) };
}
