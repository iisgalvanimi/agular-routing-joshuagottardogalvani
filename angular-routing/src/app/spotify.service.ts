import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBzggDw9RO70x4hDPOLaONu8Mmzmby3o4y0NR_Q6UtkhzGBdQ302g-M__Yh-aPhDRYZBe2jbLwp9UR1O9yAKcgPNC4vZtXqJ8PzXBjSywikY6r5cRwIIYSsezMD7CUodlVZSlQRTU5Wqiq7'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }
}

