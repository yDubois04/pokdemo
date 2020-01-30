import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  private subject = new Subject<any>();

  constructor() {
  }

  sendId(id: string){
    this.subject.next({idPokemon: id});
  }

  getId(): Observable<any>{
    return this.subject.asObservable();
  }
}
