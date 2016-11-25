import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderSubnavComponent } from './header-subnav/header-subnav.component';
import { FooterSubnavComponent } from './footer-subnav/footer-subnav.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyCvComponent } from './my-cv/my-cv.component';
import { ContactComponent } from './contact/contact.component';
import { LostComponent } from './lost/lost.component';

const appRoutes: Routes = [
  { path: 'about-me/about-me', component: AboutMeComponent },
  { path: 'my-work/my-work', component: MyWorkComponent },
  { path: 'my-cv/my-cv', component: MyCvComponent },
  { path: 'contact/contact', component: ContactComponent},
  { path: '', component: AppComponent },
  { path: '**', component: LostComponent }
];

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
