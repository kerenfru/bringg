import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import * as TaskActions from './../actions/task.actions';

import * as fromTaskReducer from './../reducers/task.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { Store, select } from '@ngrx/store';
import { AppState } from './../app.state';
import { Task } from '../models/task.model';


@Injectable()
export class TaskService {

    private allTasks;
    private taskById;
    constructor (private store: Store<AppState> ) {


      this.allTasks = createSelector(
        fromTaskReducer.selectAll,
        (entities) => {
          return entities;
        }
      );

      this.taskById = createSelector(fromTaskReducer.selectEntities,
        (entities: Dictionary<Task>, props: {id: number}) => {
          return entities[props.id];
        }
      );

    }

    public add(data: Task) {
      data.id = new Date().getTime();
      this.store.dispatch(new TaskActions.AddTask(data) );
    }

    public list() {
      return this.store.pipe(select(this.allTasks));
    }

    public fetch() {
      this.store.dispatch(new TaskActions.LoadTask());
    }

    public remove(id: number) {
      this.store.dispatch(new TaskActions.RemoveTask(id));
    }

    public assignDriver(id: number, driverId: number) {
      this.store.dispatch(new TaskActions.UpdateTask(id, {driver: driverId}));
    }

    public getDetail(id: number) {
      return this.store.pipe(select(this.taskById, {id: id}));
    }

    public edit(id: number, changes: Task) {
      this.store.dispatch(new TaskActions.UpdateTask(id, changes));
    }
}
