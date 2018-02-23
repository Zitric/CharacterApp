// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

// Component
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/characters/character.component';
import { CharactersComponent } from './components/characters/characters.component';

// Routes
import { APP_ROUTING } from './app.routes';

// Servicies
import { CharacterService } from './servicies/character.service';
import { KeysPipe } from './pipes/keys.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
