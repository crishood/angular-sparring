import { Directive, inject, input, TemplateRef } from '@angular/core';
import { TabModel } from '../../models/tab.model';

@Directive({
  selector: '[tab]',
  standalone: true,
})
export class TabDirective {
  name = input.required<string>();
  dataTest = input.required<string>();
  comment = input<string>();

  public templateRef = inject(TemplateRef<TabModel>);
}
