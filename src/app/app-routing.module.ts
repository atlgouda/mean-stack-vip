import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VipCreateComponent } from './components/vip-create/vip-create.component';
import { VipListComponent } from './components/vip-list/vip-list.component';
import { VipEditComponent } from './components/vip-edit/vip-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'vips-list' },
  { path: 'create-vip', component: VipCreateComponent },
  { path: 'edit-vip/:id', component: VipEditComponent },
  { path: 'vips-list', component: VipListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }