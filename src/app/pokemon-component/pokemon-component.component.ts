import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit {

  id: string = "";
  title: string = "Pokemon c'est bien !!!!!";
  choixPokemon: string = "";
  filterSearch: string = "";
  
  pokemons: Pokemon [] = [
		{id: 1,name: 'Pikatchu'},
		{id: 2,name: 'Bulbizarre'},
		{id: 3,name: 'Canarticho'},
		{id: 4,name: 'Roucool'}
  ];

  constructor() {
	
  }

  ngOnInit() {
  }
  
  go () {
	console.log ("Pokemon sélectionné : id: "+this.id+" pokemon : " + this.choixPokemon);
  }

}
