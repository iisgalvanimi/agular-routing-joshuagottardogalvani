import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    routeObs : Observable<ParamMap>;
    artist: any;
    spotifyServiceObs : Observable<any>;

    constructor(private route: ActivatedRoute, private service: SpotifyService, private location: Location){}

    ngOnInit(): void {
        this.routeObs = this.route.paramMap;
        this.routeObs.subscribe(this.getRouterParam);
    }

    getRouterParam = (params: ParamMap) =>
    {
        let artistId = params.get('id');
        console.log (artistId);
        this.spotifyServiceObs = this.service.getArtist(artistId) ;
        this.spotifyServiceObs.subscribe((data)=>this.artist = data)
    }

    back() : void
    {
        this.location.back();
    }

}
