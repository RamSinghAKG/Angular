import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  items = ['Angular 4', 'React JS', 'Underscore'];
  prod = {newItem: "def"};

   pushItem = function(prod){
     if(prod.newItem != ""){
       this.items.push(prod.newItem);
       prod.newItem = "";
     }
   }
   removeItem = function(index){
     this.items.splice(index,1);
   }
  ngOnInit() {
  }

}
