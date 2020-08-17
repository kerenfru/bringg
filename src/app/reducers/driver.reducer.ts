import {Action} from '@ngrx/store';
import {Driver} from '../models/driver.model';

import * as DriverActions from './../actions/driver.actions';

import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {createSelector, createFeatureSelector} from '@ngrx/store';


export interface DriverState extends EntityState<Driver> {
  drivers: Driver[];
  loading: boolean;
}

export const adapter: EntityAdapter<Driver> =
  createEntityAdapter<Driver>();

export const initialDriverState: DriverState = adapter.getInitialState({
  drivers: [],
  loading: false,
});


export function driverReducers(state = initialDriverState, action: DriverActions.Actions) {

  switch (action.type) {
    case DriverActions.LOAD_DRIVER: {
      return adapter.removeAll({
        ...state,
        loading: false,
      });
    }
    case DriverActions.LOAD_DRIVER_FAIL: {
      return {
        ...state,
        loading: false,
        // loaded: false
      };
    }
    case DriverActions.LOAD_DRIVER_SUCCESS: {
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
      });
    }
    case DriverActions.ADD_DRIVER:
      return adapter.addOne(action.payload, state);

    case DriverActions.UPDATE_DRIVER:

      if (state.entities[action.id] === undefined) {
        return state;
      }

      return adapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case DriverActions.REMOVE_DRIVER:
      return adapter.removeOne(action.id, state);
    default:
      return state;
  }
}

export const getDriverState = createFeatureSelector<DriverState>('drivers');


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors(getDriverState);
