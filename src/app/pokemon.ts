export interface IPokemon {
  name ?: string;
  url ?: string;
}

export interface PokemonAPIResult {
  count ?: number;
  next ?: string;
  name ?: string;
  previous ?: null;
  results?: IPokemon[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  stats: Stat[];
}
export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}
export interface Species {
  name: string;
  url: string;
}


export class Pokemon {

  constructor(private name: string, private id: number, private url: string) {
  }
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getUrl() {
    return this.url;
  }
}
