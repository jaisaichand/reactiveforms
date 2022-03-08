import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.scss']
})
export class FormoneComponent implements OnInit {
  passwordPattern=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  formex:FormGroup;
  constructor() {
    this.formex = new FormGroup({
      name : new FormControl('',{validators:[Validators.required]}),
      email:new FormControl('',{validators:[Validators.required,Validators.email]}),
      phone:new FormControl('',{validators:[Validators.required,Validators.minLength(6),Validators.maxLength(10)]}),
      pswd:new FormControl('',{validators:[Validators.required,Validators.pattern(this.passwordPattern)]})
    })
   }

   placeholder1="please enter input"
   placeholder2="enter valid input"

   formSubmitted(finForm:FormGroup){
     console.log(finForm);
     
   }

  ngOnInit(): void {
  }

}
