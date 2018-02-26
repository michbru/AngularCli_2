import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BootTableComponent} from './boot-table/boot-table.component';

const routes: Routes = [

  {
    path: 'boot-table',
    component: BootTableComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
