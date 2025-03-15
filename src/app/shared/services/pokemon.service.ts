import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from '../models/Pokemon.model';
import { PokemonHttpClient } from '../config/PokemonHttpClient';
import { PokeApiResponse } from '../models/PokeApiResponse.model';

@Component({
  selector: 'app-tela-inicial',
  imports: [],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

    constructor(private client: HttpClient) {
    }

    public GetPokemons(): Observable<PokeApiResponse<PokemonModel[]>> { 
      return this.client.post<PokeApiResponse<PokemonModel[]>>(PokemonHttpClient.baseUrl, `{"query":"query samplePokeAPIquery { pokemons: pokemon_v2_pokemonspecies(order_by: {id: asc}) { id name color: pokemon_v2_pokemoncolor { name } sprites: pokemon_v2_pokemons { sprites: pokemon_v2_pokemonsprites { sprites } } } }","operationName":"samplePokeAPIquery"}`); 
    }
    
}
