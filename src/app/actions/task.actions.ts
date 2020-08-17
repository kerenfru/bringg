import {Action} from "@ngrx/store";
import {Task} from "../models/task.model";

export const ADD_TASK = '[Task] Add';
export const REMOVE_TASK = '[Task] Remove';
export const UPDATE_TASK = '[Task] Update';
export const UPDATE_TASK_SUCCESS = '[Task] Update Success';
export const LOAD_TASK = '[Task] Load';
export const LOAD_TASK_SUCCESS = '[Task] Load Success';
export const LOAD_TASK_FAIL = '[Task] Load Fail';


export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: Task) {

  }
}


export class UpdateTask implements Action {
  readonly type = UPDATE_TASK;

  constructor(public id: number, public changes) {
  }
}

export class RemoveTask implements Action {
  readonly type = REMOVE_TASK;

  constructor(public id: number) {
  }
}

export class LoadTask implements Action {
  readonly type = LOAD_TASK;
}

export class LoadTaskSuccess implements Action {
  readonly type = LOAD_TASK_SUCCESS;

  constructor(public payload: Task[]) {

  }
}

export class LoadTaskFail implements Action {
  readonly type = LOAD_TASK_FAIL;

  constructor(public payload: any) {

  }
}

export class UpdateTaskSuccess implements Action {
  readonly type = UPDATE_TASK_SUCCESS;

  constructor(public payload: Task[]) {

  }
}


export type Actions = AddTask | UpdateTask | UpdateTaskSuccess | RemoveTask | LoadTask | LoadTaskSuccess | LoadTaskFail;
