import { Component, OnInit } from '@angular/core';
import { TopPlayers } from './top-players';
import { TOPPLAYERS } from './mock-top-players';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {

    // wlaściwości dla możiwości wyboru elementów listy z array

    public selectedPlayer: TopPlayers;

    public players: TopPlayers[] = TOPPLAYERS;

  // metoda pozwalająca na wybranie

    public onSelect(player: TopPlayers): void {
      this.selectedPlayer = player;
    }

  constructor() { }

  ngOnInit() {
  }

}
