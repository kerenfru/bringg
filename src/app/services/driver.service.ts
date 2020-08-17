import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import * as DriverActions from './../actions/driver.actions';

import * as fromDriverReducer from './../reducers/driver.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { Store, select } from '@ngrx/store';
import { AppState } from './../app.state';
import { Driver } from '../models/driver.model';


@Injectable()
export class DriverService {

    private allDrivers;
    private driverById;
    constructor (private store: Store<AppState> ) {


      this.allDrivers = createSelector(
        fromDriverReducer.selectAll,
        (entities) => {
          return entities;
        }
      );

      this.driverById = createSelector(fromDriverReducer.selectEntities,
        (entities: Dictionary<Driver>, props: {id: number}) => {
          return entities[props.id];
        }
      );

    }

    public add(data: Driver) {
      data.id = new Date().getTime();
      this.store.dispatch(new DriverActions.AddDriver(data) );
    }

    public list() {
      return this.store.pipe(select(this.allDrivers));
    }

    public fetch() {
      this.store.dispatch(new DriverActions.LoadDriver());
    }

    public remove(id: number) {
      this.store.dispatch(new DriverActions.RemoveDriver(id));
    }

    public getDetail(id: number) {
      return this.store.pipe(select(this.driverById, {id: id}));
    }

    public edit(id: number, changes: Driver) {
      this.store.dispatch(new DriverActions.UpdateDriver(id, changes));
    }
}
