import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyCvComponent } from './my-cv/my-cv.component';
import { ContactComponent } from './contact/contact.component';
import { LostComponent } from './lost/lost.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'my-work', component: MyWorkComponent },
    { path: 'my-cv', component: MyCvComponent },
    { path: 'contact', component: ContactComponent},
    { path: '**', component: LostComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})



export class AppRoutingModule {}
