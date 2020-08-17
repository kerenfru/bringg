import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  zoom = {latitude: 32.423885, longitude: 34.911962};

  constructor() {}

  setZoom(e) {
    this.zoom.latitude = e.latitude;
    this.zoom.longitude = e.longitude;
  }
}
