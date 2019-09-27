import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StreamersViewComponent } from './streamers-view/streamers-view.component';
import {MainService} from './services/main.service'
import { HttpClientModule, HttpClient} from '@angular/common/http'; 


import { ChartsModule } from 'ng2-charts'
@NgModule({
  declarations: [
    AppComponent,
    StreamersViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [MainService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
