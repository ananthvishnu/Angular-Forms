import { Component, ViewChild } from '@angular/core';
//TD FORM
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  //? ANGULAR FORM LESSION START ****TEMPLATE-DRIVEN-FORM-HANDLING*********
  @ViewChild('f') signupForm!: NgForm;
  defaultQuation = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ""
    //    },
    //    secret: 'pet',
    //    quationAnswer:'',
    //    gender:'male'
    // })
    //? setValue & patchValue is important methods are wrap form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  // onSubmit (form: NgForm){
  // console.log(form);
  // }
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.quationAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
