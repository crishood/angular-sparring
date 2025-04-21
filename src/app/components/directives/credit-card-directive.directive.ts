import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appCreditCardDirective]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CreditCardDirective),
      multi: true,
    },
  ],
})
export class CreditCardDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const isSixteenDigits = /^[0-9]{16}$/.test(value);
    const startsWithValidDigit = /^[4|5]/.test(value);

    if (!startsWithValidDigit) {
      return {
        invalidStart: {
          message: 'Card number must start with 4 or 5.',
        },
      };
    }

    if (!isSixteenDigits) {
      return {
        invalidLength: {
          message: 'Card number must be exactly 16 digits.',
        },
      };
    }

    return null;
  }
}
