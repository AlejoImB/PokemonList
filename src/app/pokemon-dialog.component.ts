import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importar para directivas básicas
import { MatDialogModule } from '@angular/material/dialog'; // Importar correctamente
import { MatButtonModule } from '@angular/material/button'; // Importar correctamente

@Component({
  selector: 'app-pokemon-dialog',
  standalone: true,
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.scss'],
  imports: [CommonModule, MatDialogModule, MatButtonModule], 
})
export class PokemonDialogComponent {
  pokemonDetails: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {
    this.getPokemonDetails(data.pokemon.url);
  }

  getPokemonDetails(url: string): void {
    this.http.get(url).subscribe(details => {
      this.pokemonDetails = details;
    });
  }


}
