import { Component, OnInit } from '@angular/core';
//REACTIVE FORM
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  //? REACTIVE-FORM-LESSION*********************************************
  genders2 = ['male', 'female'];
  signinForm!: FormGroup;

  ngOnInit(): void {
    //this is reactive form code
    this.signinForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male'),
    });
  }

  onSubmit1() {
    console.log(this.signinForm);
  }
}
