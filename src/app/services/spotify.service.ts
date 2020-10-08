import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('spotify listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCswx0vAHAo0G3Gz2cmkd8GbTeLWP3srEtWrzFmsEdr452CceuFgbI3NyJ56Iguf5_1mswKmYQ1RJHwIKM'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
        .pipe( map( data => data['albums'].items ));
  }

  getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
        .pipe( map( data => data['artists'].items ));
  }

  getArtista( id: string ) {

    return this.getQuery(`artists/${ id }`);
      // .pipe( map( data => data['artist'].items ));
  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?market=US`)
        .pipe( map( data => data['tracks'] ));
  }
}