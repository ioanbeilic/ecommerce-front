import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./@public/public/public.module').then(m => m.PublicPageModule)
  },
  {
    path: '',
    redirectTo: "/",
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: "/",
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
