import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() picture: string;
  @Input() phone: string;
  @Input() age: number;
  @Input() location: Coordinates;
  @Output() locationEvent = new EventEmitter<Coordinates>();
  @Output() removeEvent = new EventEmitter<string>();

  constructor() { }

  clickLocation() {
    this.locationEvent.emit(this.location);
  }

  remove() {
    this.removeEvent.emit(this.id);
  }

}
