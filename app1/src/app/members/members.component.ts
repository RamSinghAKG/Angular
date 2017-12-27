import { Component, OnInit } from '@angular/core';
import { EmitArgs } from '../favorite/favorite.component';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  randomArr = [3,1,4,9,6];
  post = { title: "Title", isFavorite: true }
  constructor() { }
  ngOnInit() { }

  onFavoriteChanged(emitObj:EmitArgs){
    console.log("favorite changed : ", emitObj);
  }

}
