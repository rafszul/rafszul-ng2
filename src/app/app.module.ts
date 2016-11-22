import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderSubnavComponent } from './header-subnav/header-subnav.component';
import { FooterSubnavComponent } from './footer-subnav/footer-subnav.component';
=======
import { SiteHeaderComponent } from './site-header.component';
>>>>>>> d69830a3b603abc49117fd27d57fc9533092db74

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderSubnavComponent,
    FooterSubnavComponent
=======
    SiteHeaderComponent
>>>>>>> d69830a3b603abc49117fd27d57fc9533092db74
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
