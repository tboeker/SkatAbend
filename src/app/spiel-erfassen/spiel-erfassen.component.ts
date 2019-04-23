import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/app.reducer';
import { SpielErfassenAction } from '../app.actions';

@Component({
  selector: 'app-spiel-erfassen',
  templateUrl: './spiel-erfassen.component.html',
  styleUrls: ['./spiel-erfassen.component.css']
})
export class SpielErfassenComponent implements OnInit {

  spielerNummer: number;
  gewonnen: boolean;
  verloren: boolean;
  punkte: number;

  constructor(private store: Store<State>) { }

  ngOnInit() {

  }

  spielErfassen() {

      this.store.dispatch(new SpielErfassenAction(this.spielerNummer,
        this.gewonnen, this.verloren, this.punkte));

      this.punkte = 0;
  }
}
