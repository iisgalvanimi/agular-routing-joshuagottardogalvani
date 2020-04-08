import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-routed-app';

  query: string;
  obsTrack: Observable<Object>;
  results: Object;

  constructor(public spotify: SpotifyService) { }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchTrack(this.query);
    this.obsTrack.subscribe((data) => this.results = data);
  }
}
