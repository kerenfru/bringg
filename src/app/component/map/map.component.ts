import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from '../../../../node_modules/rxjs/Rx';
import {Driver} from '../../models/driver.model';
import {DriverService} from '../../services/driver.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() lat: number;
  @Input() lng: number;

  icon = {
    url: 'assets/truck2.svg',
    scaledSize: {
      height: 40,
      width: 20
    }
  };
  public driversSub: Observable<Driver>;

  constructor(private driverService: DriverService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lat && changes.lng) {
      this.lat = Number(changes.lat.currentValue);
      this.lng = Number(changes.lng.currentValue);
    }
  }

  ngOnInit() {
    this.driversSub = this.driverService.list();
  }

}
