import {
  Component,
  input,
  QueryList,
  ViewChildren,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-code',
  imports: [],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent {
  public length = input<number>(4);

  @ViewChildren('inputEl')
  inputElements?: QueryList<ElementRef<HTMLInputElement>>;

  get inputs(): number[] {
    return Array(this.length()).fill(0);
  }
}
