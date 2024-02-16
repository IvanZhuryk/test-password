import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { StrongPasswordRegx } from './constants/constants';
import { SectionComponent } from './components/section/section.component';
import { PasswordService } from './services/password.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    PasswordInputComponent,
    SectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'test-password';
  reactiveForm: FormGroup;
  value: string;
  constructor(private readonly passService: PasswordService) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(StrongPasswordRegx),
      ]),
    });
  }
  ngOnChange() {
    if (this.value.length > 0) this.passService.passwordFormField(this.value);
  }
}
