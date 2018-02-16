import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Character, Headers } from '../interfaces/character.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {

  fireUrl = 'https://starwarsapp-5c36d.firebaseio.com/Jedi.json';

  constructor( private http: Http ) { }

  newCharacter( character: Character) {
    const body = JSON.stringify( character );
    const headers = new Headers({
      'Content-type': 'application/json'
    });

    return this.http.post( this.fireUrl, body, { headers })
      .map( response => {
        console.log(response.json());
        return response.json();
      } );
  }

}
