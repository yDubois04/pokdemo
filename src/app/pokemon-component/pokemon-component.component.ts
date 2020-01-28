import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit {

  id: string = '';
  title: string = 'Pokemon c\'est bien !!!!!';
  choixPokemon: string = '';
  filterSearch: string = '';

  pokemons: Pokemon [];

  constructor(private pokeService: PokemonService) {

  }

  ngOnInit() {
    this.pokeService.getPokemons().subscribe(res => {
      this.pokemons = res.results.map(item => new Pokemon(item.name));
    });

  }

  go() {
    console.log ( 'Pokemon sélectionné : id: ' + this.id + ' pokemon : ' + this.choixPokemon);
  }

}
