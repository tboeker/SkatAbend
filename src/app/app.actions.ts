import { Action } from '@ngrx/store';

export enum AppActionTypes {
  RundeStarten = '[App] Runde Starten',
  SpielErfassen = '[App] Spiel Erfassen'
  
}

export class RundeStarten implements Action {
  readonly type = AppActionTypes.RundeStarten;
  constructor(anzahlSpieler : number) {    
  }
}

export class SpielErfassen implements Action {
  readonly type = AppActionTypes.SpielErfassen;

  constructor(spielerNummer: number, gewonnen: boolean, verloren: boolean, punkte: number) {
  }
}

export type AppActions = RundeStarten
 | SpielErfassen;
