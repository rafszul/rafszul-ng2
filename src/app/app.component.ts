import { Component } from '@angular/core';
import { HeaderSubnavComponent } from './header-subnav/header-subnav.component';
import { FooterSubnavComponent } from './footer-subnav/footer-subnav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
