import { SpielErfassenAction } from './app.actions';

export interface Runde {
   anzahlSpieler: number
}

export interface SpielerPunkteStand {
    spieler: Spieler,
    punkte: PunkteStand
}

export interface PunkteStand {
    gesamtPunkte: number;
}

export interface Spieler {
    name: string;
    spielerNummer: number
}

export interface Spiel {
    spielNummer: number;
    spielerNummer: number;
    gewonnen: boolean;
    verloren: boolean;
    punkte: number;
}