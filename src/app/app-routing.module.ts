import { NotFoundComponent } from './views/not-found/not-found.component';
import { CursoComponent } from './views/curso/curso.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'curso',
    component: CursoComponent
  },

  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
