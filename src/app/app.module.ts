import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { FormsModule } from '@angular/forms';



import {MatSelectModule} from '@angular/material/select'; 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
