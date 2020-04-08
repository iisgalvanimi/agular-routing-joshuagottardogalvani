import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  routeObs: Observable<ParamMap>;
  spotifyServiceObs: Observable<Object>;
  track : any;

  constructor(private route: ActivatedRoute, private router: Router, private service: SpotifyService) { }

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let trackId = params.get('id');
    console.log (trackId);
    this.spotifyServiceObs = this.service.getTrack(trackId) ;
    this.spotifyServiceObs.subscribe((data)=>this.track = data)
  }

}
