import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'childing',
    pathMatch: 'full',
  },
  {
    path: 'routing',
    loadChildren: () =>
      import('./modules/routing/routing.routes').then(
        (mod) => mod.routingRoutes
      ),
  },
  {
    path: 'childing',
    loadChildren: () =>
      import('./modules/childing/childing.routes').then(
        (mod) => mod.childingRoutes
      ),
  },
];
