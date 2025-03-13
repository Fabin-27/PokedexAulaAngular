import { Component, inject, Inject, OnInit } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { PokemonModel } from '../shared/models/Pokemon.model';

@Component({
  selector: 'app-tela-inicial',
  imports: [],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})


export class TelaInicialComponent implements OnInit {

  public pokemonList: PokemonModel[] = [];
  private service: PokemonService = inject(PokemonService)
  constructor() {}

  ngOnInit(): void {
    this.service.GetPokemons().subscribe({
      next: (response) => this.pokemonList = response.data.pokemons,
      error: (error) => alert(error?.message ?? error)
    })
  }

}
