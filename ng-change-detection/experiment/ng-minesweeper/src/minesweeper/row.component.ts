import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TileComponent } from './tile.component';

@Component({
  selector: 'row',
  template: `
  <div class="row">
      <tile *ngFor="let tile of row" [tile]="tile" (click)="handleTileClick(tile)"></tile>
    </div>
  `
})
export class RowComponent {
  @Input() row: any;
  @Output() tileClick = new EventEmitter<any>();

  handleTileClick(tile) {
    this.tileClick.next(tile);
  }
}
