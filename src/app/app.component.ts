import { Component, Output, OnInit } from '@angular/core';
import events from '../../shared/EventService'
import { DarkModeComponent } from './dark-mode/dark-mode.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(){
    events
  }

  ngOnInit(
    
  ): void {}
  
}
