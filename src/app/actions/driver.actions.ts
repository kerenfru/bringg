import {Action} from '@ngrx/store';
import {Driver} from '../models/driver.model';

export const ADD_DRIVER = '[Driver] Add';
export const REMOVE_DRIVER = '[Driver] Remove';
export const UPDATE_DRIVER = '[Driver] Update';
export const LOAD_DRIVER = '[Driver] Load';
export const LOAD_DRIVER_SUCCESS = '[Driver] Load Success';
export const LOAD_DRIVER_FAIL = '[Driver] Load Fail';


export class AddDriver implements Action {
  readonly type = ADD_DRIVER;

  constructor(public payload: Driver) {

  }
}

export class UpdateDriver implements Action {
  readonly type = UPDATE_DRIVER;

  constructor(public id: number, public changes) {
  }
}

export class RemoveDriver implements Action {
  readonly type = REMOVE_DRIVER;

  constructor(public id: number) {
  }
}

export class LoadDriver implements Action {
  readonly type = LOAD_DRIVER;
}

export class LoadDriverSuccess implements Action {
  readonly type = LOAD_DRIVER_SUCCESS;

  constructor(public payload: Driver[]) {

  }
}

export class LoadDriverFail implements Action {
  readonly type = LOAD_DRIVER_FAIL;

  constructor(public payload: any) {

  }
}


export type Actions = AddDriver | UpdateDriver | RemoveDriver | LoadDriver | LoadDriverSuccess | LoadDriverFail;
