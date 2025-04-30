import { Directive, inject, input, TemplateRef } from '@angular/core';
import { TabModel } from '../../models/tab.model';

@Directive({
  selector: '[tab]',
  standalone: true,
})
export class TabDirective {
  public name = input.required<string>();
  public dataTest = input.required<string>();
  public comment = input<string>();

  public templateRef = inject(TemplateRef<TabModel>);
}
