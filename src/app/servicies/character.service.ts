import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Character } from '../interfaces/character.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {

  fireUrl = 'https://starwarsapp-5c36d.firebaseio.com/Character.json';
  characterUrl = 'https://starwarsapp-5c36d.firebaseio.com/Character/';

  constructor( private http: Http ) { }

  newCharacter( character: Character) {
    const body = JSON.stringify( character );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.fireUrl, body, { headers })
      .map( response => {
        return response.json();
      } );
  }

  updateCharacter( character: Character, key$: string) {
    const body = JSON.stringify( character );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${ this.characterUrl }/${ key$ }.json`;

    return this.http.put( url, body, { headers })
      .map( response => {
        return response.json();
      } );
  }

  getCharacter( key$: string ) {
    const url = `${ this.characterUrl }/${ key$ }.json`;
    return this.http.get( url ).map( response => response.json() );
  }

  getCharacters() {
    return this.http.get( this.fireUrl ).map( response => response.json() );
  }

  deleteCharacter( key$: string) {
    const url = `${ this.characterUrl }/${ key$ }.json`;
    return this.http.delete( url ).map( response => response.json() );
  }
}
