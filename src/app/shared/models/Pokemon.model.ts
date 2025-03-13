export class PokemonModel {
  public id: String;
  public name: String;
  public url: String;
  public sprites: { sprites: Sprites[] }[]
}

export class Sprites {
    public sprites: Sprite
}

export class Sprite {
    public front_default: String;
}