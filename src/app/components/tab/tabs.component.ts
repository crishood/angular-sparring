import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabDirective } from './tab.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  // Signals implementation
  // public tabs = contentChildren<TabDirective>('ng-template[tab]');
  @ContentChildren(TabDirective) tabChildren!: QueryList<TabDirective>;

  public activeTabIndex = 0;

  selectTab(index: number) {
    this.activeTabIndex = index;
  }
}
