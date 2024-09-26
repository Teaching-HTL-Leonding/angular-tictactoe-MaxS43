import { Component } from '@angular/core';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [GameComponent]
})
export class AppComponent {
  title = 'tic-tac-toe';
}
