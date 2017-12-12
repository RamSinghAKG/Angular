import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
    this.items = ['Angular 4', 'React JS', 'Underscore'];
    this.newItem = "";
   }
   pushItem = function(){
     if(this.newItem != ""){
       this.items.push(this.newItem);
       this.newItem = "";
     }
   }
  ngOnInit() {
  }

}
