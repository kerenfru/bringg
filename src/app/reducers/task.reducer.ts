import {Action} from '@ngrx/store';
import {Task} from '../models/task.model';

import * as TaskActions from './../actions/task.actions';

import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {createSelector, createFeatureSelector} from '@ngrx/store';


export interface TaskState extends EntityState<Task> {
  tasks: Task[];
  loading: boolean;
}

export const adapter: EntityAdapter<Task> =
  createEntityAdapter<Task>();

export const initialTaskState: TaskState = adapter.getInitialState({
  tasks: [],
  loading: false,
});


export function taskReducers(state = initialTaskState, action: TaskActions.Actions) {

  switch (action.type) {
    case TaskActions.LOAD_TASK: {
      return adapter.removeAll({
        ...state,
        loading: false,
      });
    }
    case TaskActions.LOAD_TASK_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case TaskActions.LOAD_TASK_SUCCESS: {
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
      });
    }
    case TaskActions.ADD_TASK:
      return adapter.addOne(action.payload, state);

    case TaskActions.UPDATE_TASK:

      if (state.entities[action.id] === undefined) {
        return state;
      }

      return adapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case TaskActions.REMOVE_TASK:
      return adapter.removeOne(action.id, state);
    default:
      return state;
  }
}

export const getTaskState = createFeatureSelector<TaskState>('tasks');


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors(getTaskState);
