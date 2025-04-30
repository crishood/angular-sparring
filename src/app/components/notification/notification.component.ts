import {
  AfterViewInit,
  Component,
  ContentChild,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NotificationDirective } from './notification.directive';
import { NotificationModel } from '../../models/notification.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements AfterViewInit {
  // @ContentChild(NotificationDirective, { read: TemplateRef })
  // currentNotification: TemplateRef<NotificationModel>;

  @ContentChild(NotificationDirective)
  notification!: NotificationDirective;

  ngAfterViewInit(): void {
    const type = this.notification.notificationType();
    const message = this.notification.message();

    console.log({ type, message });
  }
}
