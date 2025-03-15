export class PokemonModel {
  public id: string;
  public name: string;
  public color: { name: string };
  public sprites: { sprites: Sprites[] }[];
}


export class Sprites {
    public sprites: Sprite
}

export class Sprite {
    public front_default: String;
}