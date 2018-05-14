import { Component, OnInit } from '@angular/core';
import { createGame } from '../minesweeper/game';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public game;
  title = 'app';
  ngOnInit() {
    this.startNewGame();
  }
  startNewGame() {
    this.game = createGame({ cols: 16, rows: 16, mines: 48 });
  }
}
