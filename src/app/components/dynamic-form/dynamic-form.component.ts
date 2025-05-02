import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  inject,
  input,
  OnInit,
  output,
  TemplateRef,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @ContentChild(TemplateRef)
  fields: TemplateRef<any>;

  public formTitle = input.required<string>();
  public submit = output<any>();
  public form: UntypedFormGroup;

  private _formBuilder = inject(UntypedFormBuilder);

  ngOnInit(): void {
    this._setInitialValues();
  }

  public onSubmit() {
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }

  private _setInitialValues() {
    this.form = this._formBuilder.group({
      name: [''],
      lastName: [''],
    });
  }
}
