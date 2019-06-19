import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { NEWS } from './mock-news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    // wlaściwości dla możiwości wyboru elementów listy z array

    public selectedNews: News;

    public newss: News[] = NEWS;

  // metoda pozwalająca na wybranie

    public onSelect(news: News): void {
      this.selectedNews = news;
    }

  constructor() { }

  ngOnInit() {
  }

}
