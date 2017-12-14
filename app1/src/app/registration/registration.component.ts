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
    this.resetForm();
  }
  constructor() {
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
       firstname: new FormControl("Ram"),
       lastname: new FormControl(""),
       languages: new FormControl("")
     });
   }
  ngOnInit(){
    this.initForm();
  }


}
