import { Component } from '@angular/core';
import { PokemonListComponent } from './pokemon-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [PokemonListComponent]
})
export class AppComponent {}
