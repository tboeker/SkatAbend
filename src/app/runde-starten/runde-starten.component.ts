import { Component, OnInit, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { RundeStartenAction } from '../app.actions';

@Component({
  selector: 'app-runde-starten',
  templateUrl: './runde-starten.component.html',
  styleUrls: ['./runde-starten.component.css']
})
export class RundeStartenComponent implements OnInit {

  @Input() anzahlSpieler: number;

  @Output() meldung: string;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  neueRunde() {
    if (this.anzahlSpieler >= 3 && this.anzahlSpieler <= 5) {
      console.log('neue runde', this.anzahlSpieler);
      this.store.dispatch(new RundeStartenAction(this.anzahlSpieler));
      this.meldung = null;
    } else{
      this.meldung = 'Mindesten 3, aber nur maximal 5 Spieler'
    }
  }

}
