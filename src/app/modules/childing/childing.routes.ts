import { Routes } from '@angular/router';
import { ChildingComponent } from './childing.component';

export const childingRoutes: Routes = [
  {
    path: '',
    component: ChildingComponent,
    children: [
      {
        path: 'content',
        loadComponent: () =>
          import('./childing-content/childing-content.component').then(
            (c) => c.ChildingContentComponent
          ),
      },
      { path: '', redirectTo: 'content', pathMatch: 'full' },
    ],
  },
];
