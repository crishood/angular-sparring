import { Component } from '@angular/core';
import { DynamicFormComponent } from '../../../components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-third-page',
  imports: [DynamicFormComponent, ReactiveFormsModule],
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.scss',
})
export class ThirdPageComponent {
  public onSubmit(e: any) {
    console.log(e);
  }
}
