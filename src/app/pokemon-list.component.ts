import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog'; // Solo importar como servicio
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PokemonDialogComponent } from './pokemon-dialog.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule], // Elimina MatDialog
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=20').subscribe(data => {
      this.pokemons = data.results;
    });
  }

  openDialog(pokemon: any): void {
    this.dialog.open(PokemonDialogComponent, {
      data: { pokemon }
    });
  }
}
