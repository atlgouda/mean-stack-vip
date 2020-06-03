import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VipCreateComponent } from './components/vip-create/vip-create.component';
import { VipListComponent } from './components/vip-list/vip-list.component';
import { VipEditComponent } from './components/vip-edit/vip-edit.component';
import { VipCardComponent } from './components/vip-card/vip-card.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-vip' },
  { path: 'create-vip', component: VipCreateComponent },
  { path: 'edit-vip/:id', component: VipEditComponent },
  { path: 'vips-list', component: VipListComponent },
  { path: 'card/:id', component: VipCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }