import {
  Component,
  input,
  QueryList,
  ViewChildren,
  ElementRef,
  forwardRef,
  OnInit,
  ChangeDetectorRef,
  inject,
  AfterContentChecked,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-code',
  imports: [],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeComponent),
      multi: true,
    },
  ],
})
export class CodeComponent
  implements OnInit, AfterContentChecked, ControlValueAccessor
{
  public length = input<number>(4);
  public disabled = input<boolean>(false);
  public inputs?: Array<number>;
  public values: number[] = [];
  public value?: string;

  @ViewChildren('inputEl')
  inputElements?: QueryList<ElementRef<HTMLInputElement>>;

  private _cdref = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.values = Array(this.length()).fill('');
    this.inputs = Array(this.length());
  }

  ngAfterContentChecked(): void {
    this._cdref.detectChanges();
  }

  public onKeydown(event: any, index: number) {}

  public onInput(event: any, index: number) {}

  _onChange = (value: string) => {};
  _onTouched = () => {};

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  writeValue(value: string): void {
    if (!value) {
      this.values?.fill(NaN);
    }
    const valueNumber = Number(value);
    if (valueNumber && value.length <= this.length() && this.values) {
      for (let i = 0; i < value.length; i++) {
        this.values[i] = Number(value.charAt(i));
      }
    }
  }
  setDisabledState?(isDisabled: boolean): void {}
}
