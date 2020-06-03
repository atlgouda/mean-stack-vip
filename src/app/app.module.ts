import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VipCreateComponent } from './components/vip-create/vip-create.component';
import { VipEditComponent } from './components/vip-edit/vip-edit.component';
import { VipListComponent } from './components/vip-list/vip-list.component';
import { ApiService } from './service/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VipCardComponent } from './components/vip-card/vip-card.component';


@NgModule({
  declarations: [
    AppComponent,
    VipCreateComponent,
    VipEditComponent,
    VipListComponent,
    VipCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
