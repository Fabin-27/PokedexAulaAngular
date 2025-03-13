import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonModel } from './shared/models/Pokemon.model';
import { PokemonService } from './shared/services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public pokemonList: PokemonModel[] = [];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.GetPokemons().subscribe({
      next: (response) => {this.pokemonList = response.data.pokemons},
      error: (error) => {alert(error?.message ?? error)}
    })

  }

}
