import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokemons: any[], filterSearch?: string): any {
    if (typeof pokemons !== 'undefined') {
      return pokemons.filter((e) => { return e.name.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1;});
    } else {
      return [];
    }
  }

}
