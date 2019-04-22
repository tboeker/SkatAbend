import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { RundeStarten } from '../app.actions';

@Component({
  selector: 'app-runde-starten',
  templateUrl: './runde-starten.component.html',
  styleUrls: ['./runde-starten.component.css']
})
export class RundeStartenComponent implements OnInit {

  @Input() anzahlSpieler: number;

  // anzahlSpieler: number;
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  neueRunde() {
    if (this.anzahlSpieler >= 3 && this.anzahlSpieler <= 5) {
      console.log('neue runde', this.anzahlSpieler);
      this.store.dispatch(new RundeStarten(this.anzahlSpieler));
    }
  }

}
