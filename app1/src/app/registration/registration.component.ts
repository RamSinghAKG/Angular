import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  frmUser;
  onSubmit = function(user){
    console.log('onSubmit user : ',user);
  }
  constructor() {
   }
   resetForm(){
     this.frmUser = new FormGroup({
       firstname: new FormControl("Ram"),
       lastname: new FormControl(""),
       languages: new FormControl("")
     });
   }
  ngOnInit(){
    this.resetForm();
  }


}
