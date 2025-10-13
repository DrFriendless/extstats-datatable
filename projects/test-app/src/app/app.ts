import { Component } from '@angular/core';
import {Column, DataTable, DataTableBody, DataTableController, DataTableHead} from "extstats-datatable";

class Game {
  name: string;
  tooltip: string;
  n: number;

  constructor(name: string, n: number) {
    this.name = name;
    this.n = n;
    this.tooltip = name;
  }
}

@Component({
  selector: 'app-root',
  imports: [DataTable, DataTableController, DataTableHead, DataTableBody],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  rows: Game[] = [
    new Game("Ludo", 1234),
    new Game("Scrabble", 42),
    new Game("Domaine", 1987),
    new Game("Beowulf", 12),
    new Game("Caylus", 123),
  ];
  nameColumn = new Column<Game>({ name: "Name", field: "name", tooltip: "Game Name" });
  numberColumn = new Column<Game>({ name: "Number", field: "n", tooltip: "Just Some Number" });
  columns: Column<Game>[] = [ this.nameColumn, this.numberColumn ];
}
