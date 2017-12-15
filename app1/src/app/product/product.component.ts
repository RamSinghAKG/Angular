import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  frmProduct;
  items = ['Angular 4', 'React JS', 'Underscore'];
  constructor(private newService: MyDataService){

  }
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
    //obj.name has modified in app.component.ts
    console.log(this.newService.obj.name);
  }

}
