import { createSelector } from '@ngrx/store';
import { State } from './reducers/app.reducer';



export const selectRunde = (state: State) => state.runde;

export const selectVerlauf = (state: State) => state.verlauf;