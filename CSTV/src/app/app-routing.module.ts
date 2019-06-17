import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: MainComponent},
  {path: 'events', component: EventsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'top-players', component: TopPlayersComponent},
  {path: 'top-teams', component: TopTeamsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
