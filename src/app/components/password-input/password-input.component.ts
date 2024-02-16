import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  public value: string | undefined;
  private onChange!: (value: string) => void;
  private onTouched!: () => void;
  constructor(private readonly changeDetector: ChangeDetectorRef) {}
  public onInputValueChange(event: Event): void {
    const targetElement = event.target as HTMLInputElement;
    const value = targetElement.value;
    this.value = value;
    console.log(value);
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value;
    this.changeDetector.detectChanges();
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  @HostListener('focusout')
  onFocusOut() {
    this.onTouched;
  }
}
