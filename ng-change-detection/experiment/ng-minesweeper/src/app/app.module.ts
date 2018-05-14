import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RowComponent } from '../minesweeper/row.component';
import { MinesweeperComponent } from '../minesweeper/minesweeper.component';
import { TileComponent } from '../minesweeper/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    MinesweeperComponent,
    TileComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
