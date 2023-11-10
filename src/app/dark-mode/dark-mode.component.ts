import { Component, EventEmitter, Input, Output } from '@angular/core';
import events from '../../../shared/EventService';


@Component({
  selector: 'dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent {
  @Input() dark!: boolean;
  @Output() darkened = new EventEmitter<boolean>();

toggleDark() {
  this.dark = !this.dark
  this.darkened.emit(this.dark)
}

}
