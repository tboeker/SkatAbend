export class Runde {
    anzahlSpieler: number;
}

export class PunkteStand {
    gesamtPunkte: number;
}

export class Spieler {
    name: string;
    spielerNummer: number
}

export class Spiel {
    spielNummer: number;
    spielerNummer: number;
    gewonnen: boolean;
    verloren: boolean;
    punkte: number;
}