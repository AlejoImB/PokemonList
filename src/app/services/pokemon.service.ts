import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number = 20) {
    return this.http.get(`${this.apiUrl}?limit=${limit}`);
  }

  getPokemonDetails(url: string) {
    return this.http.get(url);
  }
}
