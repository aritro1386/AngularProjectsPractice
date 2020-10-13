import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.css']
})
export class GridlistComponent implements OnInit {
  titleList = 'Add User';
  userDetails = [];
  hideGrid = true;
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void { }

  addUser(name: string, email: string) {
    this.ref.detectChanges();
    this.userDetails.push({
      name,
      email
    });
    this.hideGrid = (this.userDetails.length > 0) ? false : true;
  }
}
