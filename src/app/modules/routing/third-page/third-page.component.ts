import { Component } from '@angular/core';
import { CodeComponent } from '../../../components/code/code.component';

@Component({
  selector: 'app-third-page',
  imports: [CodeComponent],
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.scss',
})
export class ThirdPageComponent {}
