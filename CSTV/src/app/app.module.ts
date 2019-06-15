import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopPlayersComponent,
    EventsComponent,
    NewsComponent,
    TopTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
