import { Component } from '@angular/core';

@Component({
  selector: 'dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent {
dark: boolean = false;

toggleDark() {
  this.dark = !this.dark
  return this.dark;
}

}
