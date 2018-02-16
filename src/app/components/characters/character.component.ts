import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../servicies/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styles: []
})
export class CharacterComponent implements OnInit {

  character: Character = <Character>{
    name: '',
    lastName: '',
    bio: ''
  }

  constructor( private characterService: CharacterService,
               private router: Router ) { }

  ngOnInit() {
  }

  save() {
    console.log(this.character);

    this.characterService.newCharacter( this.character )
      .subscribe(data => {
          this.router.navigate(['/character', data.name]);
      },
      error => console.error(error));
  }

}
