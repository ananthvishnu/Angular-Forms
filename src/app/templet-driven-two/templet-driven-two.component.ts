import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator } from './custom.validator';

@Component({
  selector: 'app-templet-driven-two',
  templateUrl: './templet-driven-two.component.html',
  styleUrls: ['./templet-driven-two.component.css'],
})
export class TempletDrivenTwoComponent implements OnInit {
  projectForm!: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required, customValidator.invalidProjectName]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('critical'),
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }
}
