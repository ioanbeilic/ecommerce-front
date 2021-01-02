import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicPage } from './public.page';

const routes: Routes = [
  {
    path: '',
    component: PublicPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../pages/home/home.module").then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("../pages/contact/contact.module").then(
            (m) => m.ContactPageModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () => import('../../@admin/admin/admin.module').then(m => m.AdminPageModule)
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPageRoutingModule { }
