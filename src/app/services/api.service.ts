import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';

import {Task} from '../models/task.model';
import {Driver} from "../models/driver.model";

declare let toastr: any;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  fetchTasks() {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  fetchDrivers() {
    return this.http.get<Driver[]>('http://localhost:3000/drivers');
  }

  updateTask(id: number, changes: any) {
    return this.http.patch<Task[]>('http://localhost:3000/tasks/' + id, changes);
  }
}
