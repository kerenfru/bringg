import {Actions, Effect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import * as fromTask from '../actions/task.actions';

// RXJS imports
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import {ApiService} from '../services/api.service';
import {NeverObservable} from "rxjs-compat/observable/NeverObservable";

@Injectable()
export class TaskEffects {
  constructor(private apiService: ApiService, private action$: Actions) {}

  @Effect()
  loadTask$ = this.action$.pipe(
    ofType(fromTask.LOAD_TASK),
    switchMap(task => {
      return this.apiService.fetchTasks().pipe(
        map(response => {
          return new fromTask.LoadTaskSuccess(response);
        })
      );
    })
  );

  @Effect()
  updateTask$ = this.action$.pipe(
    ofType(fromTask.UPDATE_TASK),
    switchMap((task:any) => {
      return this.apiService.updateTask(task.id, task.changes).pipe(
        map(response => {
          return new fromTask.UpdateTaskSuccess(response);
        })
      );
    })
  );
}
