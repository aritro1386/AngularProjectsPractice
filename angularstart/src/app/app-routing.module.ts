import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularDemoPageComponent } from './angular-demo-page/angular-demo-page.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { RomanNumeralConvertorComponent } from './roman-numeral-convertor/roman-numeral-convertor.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: '', redirectTo: '/angularDemo', pathMatch: 'full' },
  { path: 'angularDemo', component: AngularDemoPageComponent },
  { path: 'todoList', component: TodolistComponent },
  { path: 'gridList', component: GridlistComponent },
  { path: 'palindrome', component: PalindromeComponent },
  { path: 'romanNumeral', component: RomanNumeralConvertorComponent }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
