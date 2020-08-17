import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Task} from "../../models/task.model";
import {Observable} from "../../../../node_modules/rxjs/Rx";
import {TaskService} from "../../services/task.service";
import {DriverService} from "../../services/driver.service";
import {Driver} from "../../models/driver.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {map, startWith, withLatestFrom} from "rxjs/internal/operators";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  @Output() locationEvent = new EventEmitter<Coordinates>();

  public driverSub: Observable<Driver>;
  searchName: string;
  order: string = 'name';
  reverse: boolean = false;

  constructor(private driverService: DriverService, private formBuilder: FormBuilder ) {
  }

  ngOnInit() {
    this.driverSub = this.driverService.list();
    this.driverService.fetch();

  }

  editRecord(id) {
    console.log('Edit record ID>>>', id);
    //this.router.navigate(['/edit', id]);
  }

  deleteRecord(id) {
    this.driverService.remove(id);
  }

  public trackByToodFun(index, item) {
    return item.id;
  }

  location(e) {
    this.locationEvent.emit(e);
  }

}
