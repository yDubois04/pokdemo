import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from './pokemon';

interface IPokemon {
  name ?: string;
  url ?: string;
}

interface PokemonResult {
  results ?: IPokemon[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<PokemonResult> {
    return this.http.get<PokemonResult>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964');
  }

  getPokemon(id: number): Observable<PokemonResult> {
    return this.http.get<PokemonResult>('https://pokeapi.co/api/v2/pokemon/'+ id);
  }
}

