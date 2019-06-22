import { Component, OnInit } from '@angular/core';
import { TopTeams } from './top-teams';
import { TOPTEAMS } from './mock-top-teams';

@Component({
  selector: 'app-top-teams',
  templateUrl: './top-teams.component.html',
  styleUrls: ['./top-teams.component.css']
})
export class TopTeamsComponent implements OnInit {

  // wlaściwości dla możiwości wyboru elementów listy z array

  public selectedTeam: TopTeams;

  public teams: TopTeams[] = TOPTEAMS;

// metoda pozwalająca na wybranie

  public onSelect(team: TopTeams): void {
    this.selectedTeam = team;
  }

  constructor() { }

  ngOnInit() {
  }

}
