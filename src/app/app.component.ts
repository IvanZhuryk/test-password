import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'test-password';
  reactiveForm: FormGroup;
  section1: string = 'gray';
  section2: string = 'gray';
  section3: string = 'gray';
  StrongPasswordRegx: RegExp =
    /^(?=[^a-zA-Z]*[a-zA-Z])(?=\D*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
  StrongPasswordWidthOutSymRegx: RegExp =
    /^(?=[^a-zA-Z]*[a-zA-Z])(?=\D*\d).{8,}$/;
  StrongPasswordWidthOutNumbRegx: RegExp =
    /^(?=[^a-zA-Z]*[a-zA-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
  StrongPasswordWidthOutCharRegx: RegExp =
    /^(?=\D*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
  upperCase: RegExp = /^(?=[^A-Z]*[A-Z])/;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.StrongPasswordRegx),
      ]),
    });
  }
  passwordFormField() {
    let password = this.reactiveForm.get('password');
    if (!password.value?.match(/^.{8,}$/)) {
      this.section1 = 'red';
      this.section2 = 'red';
      this.section3 = 'red';
    } else if (password.value?.match(this.StrongPasswordRegx)) {
      this.section1 = 'green';
      this.section2 = 'green';
      this.section3 = 'green';
    } else if (password.value?.match(this.StrongPasswordWidthOutSymRegx)) {
      this.section1 = 'yellow';
      this.section2 = 'yellow';
      this.section3 = 'gray';
    } else if (password.value?.match(this.StrongPasswordWidthOutCharRegx)) {
      this.section1 = 'yellow';
      this.section2 = 'yellow';
      this.section3 = 'gray';
    } else if (password.value?.match(this.StrongPasswordWidthOutNumbRegx)) {
      this.section1 = 'yellow';
      this.section2 = 'yellow';
      this.section3 = 'gray';
    } else {
      this.section1 = 'red';
      this.section2 = 'gray';
      this.section3 = 'gray';
    }
  }
}
