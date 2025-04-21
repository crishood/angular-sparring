import { Component } from '@angular/core';
import { CreditCardDirective } from '../../../components/directives/credit-card-directive.directive';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  imports: [CreditCardDirective, ReactiveFormsModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss',
})
export class FirstPageComponent {
  creditCardControl = new UntypedFormControl('');
}
