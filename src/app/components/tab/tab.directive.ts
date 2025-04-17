import { Directive, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tab]',
  standalone: true,
})
export class TabDirective {
  name = input.required<string>();
  dataTest = input.required<string>();

  constructor(public templateRef: TemplateRef<unknown>) {}
}
