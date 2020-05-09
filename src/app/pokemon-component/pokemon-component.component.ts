import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonDetails} from '../pokemon';
import {PokemonService} from '../pokemon.service';
import {PokemonAPIService} from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit {

  id = '';
  choixPokemon = '';
  filterSearch = '';
  pokemon: PokemonDetails;
  pokemons: Pokemon [] = [];
  i = 1;

  constructor(private pokeService: PokemonService, private apiService: PokemonAPIService) {

  }

  ngOnInit() {
    this.pokeService.getPokemons().subscribe(data => {
      data.results.forEach((e) => {
        this.pokemons.push(new Pokemon(e.name, this.i ++ , e.url));
      });
    });
  }

  go() {
    console.log ( 'Pokemon sélectionné : id: ' + this.choixPokemon) ;
    if (this.choixPokemon !== '') {
      this.apiService.sendId(this.choixPokemon);
      this.pokeService.getPokemon(this.choixPokemon).subscribe(data => {
        this.pokemon = data;
      });
    }
  }

}
