import { Component, OnInit } from '@angular/core';
import { Events } from './events';
import { EVENTS } from './mock-events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  // wlaściwości dla możiwości wyboru elementów listy z array

  public selectedEvent: Events;

  public events: Events[] = EVENTS;

// metoda pozwalająca na wybranie

  public onSelect(event: Events): void {
    this.selectedEvent = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
