import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Component
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/characters/character.component';
import { CharactersComponent } from './components/characters/characters.component';

// Routes
import { APP_ROUTING } from './app.routes';

// Servicies
import { CharacterService } from './servicies/character.service';



@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
