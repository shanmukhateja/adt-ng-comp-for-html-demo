import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { QaComponent } from './qa/qa.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    QaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataTablesModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot()
  ],
  entryComponents: [
    QaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
