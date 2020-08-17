import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as fromTask from '../actions/driver.actions';
// RXJS imports
import {map, switchMap} from 'rxjs/operators';
import {ApiService} from '../services/api.service';

@Injectable()
export class DriverEffects {
  constructor(private apiService: ApiService, private action$: Actions) {}

  @Effect()
  loadDriver$ = this.action$.pipe(
    ofType(fromTask.LOAD_DRIVER),
    switchMap(driver => {
      return this.apiService.fetchDrivers().pipe(
        map(response => {
          return new fromTask.LoadDriverSuccess(response);
        })
      );
    })
  );
}
