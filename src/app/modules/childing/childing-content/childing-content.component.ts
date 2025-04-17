import { Component } from '@angular/core';
import { TabsComponent } from '../../../components/tab/tabs.component';
import { TabDirective } from '../../../components/tab/tab.directive';

@Component({
  selector: 'app-childing-content',
  standalone: true,
  imports: [TabsComponent, TabDirective],
  templateUrl: './childing-content.component.html',
  styleUrl: './childing-content.component.scss',
})
export class ChildingContentComponent {}
