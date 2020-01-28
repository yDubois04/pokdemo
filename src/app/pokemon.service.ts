import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface IPokemon {
  name ?: string;
  url ?: string;
}

interface PokemonsResult {
  results?: IPokemon[];
}

interface PokemonResult {
  id ?: number;
  name ?: string;
  stats ?: any;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<PokemonsResult> {
    return this.http.get<PokemonsResult>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807');
  }

  getPokemonById(id: number): Observable<PokemonResult> {
    return this.http.get<PokemonResult>('https://pokeapi.co/api/v2/pokemon/' + id);
  }

  getPokemonByName(name: string): Observable<PokemonResult> {
    return this.http.get<PokemonResult>('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}

