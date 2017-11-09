import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent } from './app.component';
import {AppMainForm} from './app.mainform';
import {AppMainTable} from './app.maintable';
import {AppService} from './app.service';
import {EditService} from './app.editservice';
import {UpdateService} from './app.updateservice';

@NgModule({
  declarations: [
    AppComponent,
    AppMainForm,
    AppMainTable
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AppService, EditService, UpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
