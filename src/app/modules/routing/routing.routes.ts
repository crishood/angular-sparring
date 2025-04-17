import { Routes } from '@angular/router';
import { RoutingComponent } from './routing.component';

export const routingRoutes: Routes = [
  {
    path: '',
    component: RoutingComponent,
    children: [
      {
        path: 'first-page',
        loadComponent: () =>
          import('./first-page/first-page.component').then(
            (c) => c.FirstPageComponent
          ),
      },
      {
        path: 'second-page',
        loadComponent: () =>
          import('./second-page/second-page.component').then(
            (c) => c.SecondPageComponent
          ),
      },
      { path: '', redirectTo: 'first-page', pathMatch: 'full' },
    ],
  },
];
