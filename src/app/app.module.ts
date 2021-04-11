//angular
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//module
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    AddContactComponent,
    ListContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
