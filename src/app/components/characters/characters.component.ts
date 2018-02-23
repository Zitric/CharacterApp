import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../servicies/character.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: []
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  loading = true;

  constructor( private characterService: CharacterService ) {
    this.characterService.getCharacters().subscribe( data => {
      this.loading = false;
      if ( data ) {
        this.characters = data;
      }
    });
  }

  ngOnInit() {
  }

  deleteCharacter( key$: string ) {
    this.characterService.deleteCharacter( key$ ).subscribe( response => {
      if ( response ) {
        console.error(response);
      } else {
        delete this.characters[ key$ ];
      }
    });
  }
}
