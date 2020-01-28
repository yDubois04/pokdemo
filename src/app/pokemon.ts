export class Pokemon {

  constructor(private name: string, private id: number, private stats: Array<{boost: number, name: string}>) {
  }
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getStats() {
    return this.stats;
  }
}
