import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RangesFooter } from './ranges-footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // @ViewChild('calendar') calendar!: ElementRef;

  form: FormGroup;
  rangesFooter = RangesFooter;
  inlineRange;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      date: [{ begin: new Date(2018, 7, 5), end: new Date(2018, 7, 25) }],
    });
  }
  ngAfterViewInit() {
    // this.calendar.focus();
  }
  inlineRangeChange($event) {
    this.inlineRange = $event;
  }
}
