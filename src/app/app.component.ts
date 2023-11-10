import { Component } from '@angular/core';
import { DarkModeComponent } from './dark-mode/dark-mode.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WishList';
  dark: boolean = false;
}
