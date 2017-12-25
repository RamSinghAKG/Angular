import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  randomArr = [3,1,4,9,6];
  isFavorite = false;
  constructor() { }
  toggleFavorite(){
    this.isFavorite = !this.isFavorite;
  }
  ngOnInit() {
  }

}
