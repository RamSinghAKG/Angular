import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form;
  onSubmit = function(user){
    console.log('user : ',user);
  }
  constructor() {
    console.log('constructor....');
   }
  ngOnInit(){
    console.log('ngOnInit....');

    this.form = new FormGroup({
      firstname: new FormControl("Ram"),
      lastname: new FormControl(""),
      languages: new FormControl("")
    });
  }


}
