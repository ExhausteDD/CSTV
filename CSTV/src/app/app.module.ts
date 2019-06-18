import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [ // podłączenie każdego komponentu aplikacji do modulu głównego
    AppComponent,
    MainComponent,
    TopPlayersComponent,
    EventsComponent,
    NewsComponent,
    TopTeamsComponent,
    AboutComponent
  ],
  imports: [ // module dla szybciej oraz prawidłowej roboty aplikacji
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
