import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from '../../services/task.service';
import {Observable} from 'rxjs/Rx';
import {Task} from '../../models/task.model';
import {FormControl} from '@angular/forms';
import {Driver} from '../../models/driver.model';
import {DriverService} from '../../services/driver.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  public taskSub: Observable<Task>;
  public driversSub: Observable<Driver>;

  public displayedColumns: string[] = ['title', 'scheduled', 'driver', 'lat', 'lng'];
  public dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private taskService: TaskService, private driverService: DriverService) {
  }

  ngOnInit() {
    this.taskService.fetch();
    this.taskSub = this.taskService.list();
    this.driversSub = this.driverService.list();

    this.taskSub.subscribe(x => {
      this.dataSource.data = x;
      this.dataSource.paginator = this.paginator;
    });
  }

  selectChangeHandler(event: any, task: any) {
    this.taskService.assignDriver(task.id, event.target.value);
  }
}
