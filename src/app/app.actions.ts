import { Action } from '@ngrx/store';

export enum AppActionTypes {
  RundeStarten = '[App] Runde Starten',
  SpielErfassen = '[App] Spiel Erfassen'

}

export class RundeStartenAction implements Action {
  readonly type = AppActionTypes.RundeStarten;
  constructor(public anzahlSpieler : number) {
  }
}

export class SpielErfassenAction implements Action {
  readonly type = AppActionTypes.SpielErfassen;

  constructor(public spielerNummer: number, public gewonnen: boolean, public verloren: boolean, public punkte: number) {
  }
}

export type AppActions = RundeStartenAction
 | SpielErfassenAction;
