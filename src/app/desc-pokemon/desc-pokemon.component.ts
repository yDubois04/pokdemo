import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-desc-pokemon',
  templateUrl: './desc-pokemon.component.html',
  styleUrls: ['./desc-pokemon.component.css']
})
export class DescPokemonComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemonById(1).subscribe(res => {
        const stats: Array <{boost: number, name: string}> = [
          {boost: res.stats[0].base_stat, name: res.stats[0].stat.name},
          {boost: res.stats[1].base_stat, name: res.stats[1].stat.name},
          {boost: res.stats[2].base_stat, name: res.stats[2].stat.name},
          {boost: res.stats[3].base_stat, name: res.stats[3].stat.name},
        ];
        this.pokemon = new Pokemon(res.name, res.id, stats);
      }
    );
  }

}
