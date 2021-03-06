import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe } from './boot-table/data-filter.pipe'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BootTableComponent } from './boot-table/boot-table.component';
import { BootTableService } from './boot-table/boot-table.service';

@NgModule({
  declarations: [
    AppComponent,
    BootTableComponent,DataFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
  ],
  providers: [BootTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
