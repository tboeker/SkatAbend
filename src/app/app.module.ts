import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { RundeStartenComponent } from './runde-starten/runde-starten.component';
import { SpielErfassenComponent } from './spiel-erfassen/spiel-erfassen.component';
import { SpieleVerlaufComponent } from './spiele-verlauf/spiele-verlauf.component';
import { PunkteStandComponent } from './punkte-stand/punkte-stand.component';

@NgModule({
  declarations: [
    AppComponent,
    RundeStartenComponent,
    SpielErfassenComponent,
    SpieleVerlaufComponent,
    PunkteStandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
