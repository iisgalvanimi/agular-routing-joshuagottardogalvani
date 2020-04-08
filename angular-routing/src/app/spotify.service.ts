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
        'Bearer BQB3mIUEFlT3qn69Rzvkc8XU1j_rpPXRhEBpLm5vfs6EByz1g1pYNa2JZJBRzHxqrf-dgHl-E0PCRqfMkCMmEFG0ZXVA7z0MdTgUVGD79dXlbUSx3MGwgoSNQnJe-2txrCVQHdFzQdXdwYQ8'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }
}

