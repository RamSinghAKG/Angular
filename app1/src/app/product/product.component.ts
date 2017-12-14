import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  frmProduct;
  items = ['Angular 4', 'React JS', 'Underscore'];
  // prod = {newItem: "default"};
   newItemChanged = function(oldValue, changedValue){
     console.log("change value: ", changedValue);
   }
   pushItem = function(prod){
     if(prod.newItem != ""){
       this.items.push(prod.newItem);
       // this.frmProduct.patchValue({newItem: ""});
     }
   }
   removeItem = function(index){
     this.items.splice(index,1);
   }
  ngOnInit() {
  }

}
