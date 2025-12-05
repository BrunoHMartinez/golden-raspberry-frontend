import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'movies', loadComponent: () => import('./pages/movies/movies-list/movies-list').then(m => m.MoviesList) },
  { path: '**', redirectTo: 'dashboard' }
];