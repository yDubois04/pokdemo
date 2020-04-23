import {Component, Input, OnInit} from '@angular/core';
import {Pokemon, PokemonDetails} from '../pokemon';
import {PokemonAPIService} from '../pokemon-api.service';

@Component({
  selector: 'app-desc-pokemon',
  templateUrl: './desc-pokemon.component.html',
  styleUrls: ['./desc-pokemon.component.css']
})
export class DescPokemonComponent implements OnInit {

  @Input('pokemon')
  pokemon: PokemonDetails;

  constructor(private pokemonApiService: PokemonAPIService) {
  }

  ngOnInit() {
    this.pokemonApiService.getId().subscribe(data => {
      console.log('Nouvel id ' + data);
    });
  }

}
