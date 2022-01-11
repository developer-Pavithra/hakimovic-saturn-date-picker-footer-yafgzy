import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatButtonModule} from "@angular/material";

import { RangesFooter } from './ranges-footer.component';


@NgModule({
    declarations: [
        AppComponent,
        RangesFooter
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, ReactiveFormsModule, MatDatepickerModule,
        MatNativeDateModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, SatDatepickerModule, SatNativeDateModule
    ],
    entryComponents: [RangesFooter],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}