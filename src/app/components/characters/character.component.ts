import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../servicies/character.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  new = false;
  id: string;

  constructor( private characterService: CharacterService,
               private router: Router,
               private route: ActivatedRoute ) {
    this.route.params.subscribe( params => this.id = params.id );
    if ( this.id !== 'new' ){
      this.characterService.getCharacter( this.id )
        .subscribe( character =>  this.character = character );
    }
  }

  ngOnInit() {
  }

  save() {

    if ( this.id === 'new') {
        this.characterService.newCharacter( this.character )
          .subscribe(data => {
              // this.router.navigate(['/character', data.name]);
               this.router.navigate(['/characters']);
            },
          error => console.error(error));
    } else {
        this.characterService.updateCharacter( this.character, this.id )
          .subscribe(data => {
              // this.router.navigate(['/character', data.name]);
              this.router.navigate(['/characters']);
            },
          error => console.error(error));
    }
  }

  addNew( form: NgForm) {
    this.router.navigate(['/character', 'new']);
    form.reset();
  }

}
