import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-demo-page',
  templateUrl: './angular-demo-page.component.html',
  styleUrls: ['./angular-demo-page.component.css']
})
export class AngularDemoPageComponent implements OnInit {
  title = "Aritra's First Page"

  constructor() { }

  ngOnInit(): void {
  }

}
