import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AngularDemoPageComponent } from './angular-demo-page/angular-demo-page.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { RomanNumeralConvertorComponent } from './roman-numeral-convertor/roman-numeral-convertor.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AngularDemoPageComponent,
    GridlistComponent,
    PalindromeComponent,
    RomanNumeralConvertorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
