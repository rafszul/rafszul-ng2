import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderSubnavComponent } from './header-subnav/header-subnav.component';
import { FooterSubnavComponent } from './footer-subnav/footer-subnav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSubnavComponent,
    FooterSubnavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
