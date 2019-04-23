import { Action } from '@ngrx/store';
import { Runde, Spiel } from '../app.model';
import { AppActionTypes, RundeStartenAction, SpielErfassenAction } from '../app.actions';


export interface State {
  runde: Runde,
  verlauf: Spiel[]
}

export const initialState: State = {
  runde: null,
  verlauf: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    case AppActionTypes.RundeStarten: {
      const a = <RundeStartenAction>action;
      return { ...state, runde: <Runde>{ anzahlSpieler: a.anzahlSpieler } };
    }

    case AppActionTypes.SpielErfassen: {
      const a = <SpielErfassenAction>action;
      let x = state.verlauf;
      x.push(<Spiel>{
        gewonnen: a.gewonnen,
        punkte: a.punkte,
        verloren: a.verloren,
        spielerNummer: a.spielerNummer,
        spielNummer: x.length + 1
      })
      return { ...state, verlauf: x }
    }

    default:
      return state;
  }
}
