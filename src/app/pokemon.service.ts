import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonAPIResult, PokemonDetails} from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<PokemonAPIResult> {
    return this.http.get<PokemonAPIResult>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807');
  }

  getPokemon(id: string): Observable<PokemonDetails> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + id);
  }
}

