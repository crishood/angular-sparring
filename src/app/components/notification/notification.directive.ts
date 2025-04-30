import { Directive, inject, input, TemplateRef } from '@angular/core';
import { NotificationModel } from '../../models/notification.model';

@Directive({
  selector: '[appNotification]',
  standalone: true,
})
export class NotificationDirective {
  public notificationType = input.required<'success' | 'error' | 'info'>();
  public message = input.required<string>();
  public templateRef = inject(TemplateRef<NotificationModel>);
}
