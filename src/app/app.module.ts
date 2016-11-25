import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderSubnavComponent } from './header-subnav/header-subnav.component';
import { FooterSubnavComponent } from './footer-subnav/footer-subnav.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyCvComponent } from './my-cv/my-cv.component';
import { ContactComponent } from './contact/contact.component';
import { LostComponent } from './lost/lost.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSubnavComponent,
    FooterSubnavComponent,
    AboutMeComponent,
    MyWorkComponent,
    MyCvComponent,
    ContactComponent,
    LostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
