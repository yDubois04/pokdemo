import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';
import {PokemonAPIService} from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit {

  id: string = '';
  title: string = 'Mon pokedex';
  choixPokemon: string = '';
  filterSearch: string = '';

  pokemons: Pokemon [];

  constructor(private pokeService: PokemonService, private apiService: PokemonAPIService) {

  }

  ngOnInit() {
    this.pokeService.getPokemons().subscribe(res => {
      this.pokemons = res.results.map(item => new Pokemon(item.name, Number(item.url.split('/')[6]), null) );
    });
  }

  go() {
    console.log ( 'Pokemon sélectionné : id: ' + this.id + ' pokemon : ' + this.choixPokemon);
    this.apiService.sendId(this.id);
  }

}
