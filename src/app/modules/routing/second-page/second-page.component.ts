import { Component, inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-second-page',
  imports: [CardComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.scss',
})
export class SecondPageComponent implements OnInit {
  public form: UntypedFormGroup;

  private _formBuilder = inject(UntypedFormBuilder);

  ngOnInit(): void {
    this._setForm();
  }

  private _setForm() {
    this.form = this._formBuilder.group({
      name: [],
      email: [],
      phone_number: [],
      city: [],
      color: [],
    });
  }
}
