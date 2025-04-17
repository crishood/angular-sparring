import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'routing',
    pathMatch: 'full',
  },
  {
    path: 'routing',
    loadChildren: () =>
      import('./modules/routing/routing.routes').then(
        (mod) => mod.routingRoutes
      ),
  },
];
