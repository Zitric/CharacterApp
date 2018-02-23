import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform( value: any ): any {
      const keys = [];
      for ( const key of Object.keys( value ) ) {
        keys.push( key );
      }
    return keys;
  }

}
