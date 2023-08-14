import { Component, OnInit } from '@angular/core';
//REACTIVE FORM
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  //? REACTIVE-FORM-LESSION*********************************************
  genders2 = ['male', 'female'];
  signinForm!: FormGroup;
  forbiddenUserNames = ['Vishnu', 'Rajitha'];

  ngOnInit(): void {
    //this is reactive form code
    this.signinForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        //email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    // see the value changes in console
    this.signinForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    // see the status changes in console
    this.signinForm.statusChanges.subscribe((status) => {
     // console.log(status);
    });

    //console log set values
    this.signinForm.setValue({
      userData: {
        username: 'Vishnu',
        email: 'vishnurathan834@gmail.com',
      },
      gender: 'male',
      hobbies: [],
    });
 //console log patch value
    this.signinForm.patchValue({
      userData: {
        username: 'Rajitha',
      },
    });
  }

  onSubmit1() {
    console.log(this.signinForm);
    this.signinForm.reset() //reset form after submit
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signinForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signinForm.get('hobbies')).controls;
  }

  // Reactive: Using Error Codes not work version issue
  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  //Asynchrnous Validator not work version issue
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
