import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';
import {PokemonAPIService} from '../pokemon-api.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-desc-pokemon',
  templateUrl: './desc-pokemon.component.html',
  styleUrls: ['./desc-pokemon.component.css']
})
export class DescPokemonComponent implements OnInit {

  pokemon: Pokemon;
  subscription: Subscription;


  constructor(private pokemonService: PokemonService, private pokemonApiService: PokemonAPIService) {
    this.subscription = this.pokemonApiService.getId().subscribe({
      next: (v) => this.getPokemonInfo(v)
    });
  }

  ngOnInit() {
  }
  getPokemonInfo(id: string) {
    this.pokemonService.getPokemon(id).subscribe(res => {
        const stats: Array <{boost: number, name: string}> = [
          {boost: res.stats[0].base_stat, name: res.stats[0].stat.name},
          {boost: res.stats[1].base_stat, name: res.stats[1].stat.name},
          {boost: res.stats[2].base_stat, name: res.stats[2].stat.name},
          {boost: res.stats[3].base_stat, name: res.stats[3].stat.name},
          {boost: res.stats[4].base_stat, name: res.stats[4].stat.name},
          {boost: res.stats[5].base_stat, name: res.stats[5].stat.name}
        ];
        this.pokemon = new Pokemon(res.name, res.id, stats);
      }
    );
  }

}
