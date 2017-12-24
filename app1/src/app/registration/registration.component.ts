import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'util';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  frmUser;
  onSubmit = function(user){
    console.log('onSubmit user : ',user);
    this.resetForm();
  }
  constructor() {
  }
   onSave($event){
      console.log('onSave : ', $event);
   }
   resetForm(){
     this.frmUser.patchValue({
          firstname : '',
          lastname: '',
          languages: ''
        });
   }
   initForm(){
     this.frmUser = new FormGroup({
       firstname: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3),
         Validators.pattern('[\\w\\-\\s\\/]+')
       ])),
       lastname: new FormControl("", Validators.compose([
        this.textValidators
       ])),
       languages: new FormControl("")
     });
   }
   textValidators(control:FormControl){
     if(control.value.length < 3 ){
       return {'lastname' :  true};
     }
   }
  ngOnInit(){
    this.initForm();
  }
}
