import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/characters/character.component';

const APP_ROUTES: Routes = [
    { path: 'characters', component: CharactersComponent },
    { path: 'character/:id', component: CharacterComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'characters' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
