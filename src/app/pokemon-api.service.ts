import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  private subject = new Subject<string>();

  constructor() {
  }

  sendId(id: string) {
    this.subject.next(id);
  }

  getId(): Subject<string> {
    return this.subject;
  }
}
