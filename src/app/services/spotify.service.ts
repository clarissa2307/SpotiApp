import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
   }
   getNewReleases() {
      
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAaWfmi89JtXqn1BtU1Kyqqdxl8xcu9bMbkVAH8zYABzzlzXwK9LrmGC54l8fq7vAsO275Dz5SS6LD6yrg'
    });  

      return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe( map( data => data['albums'].items));
  }

  getArtista( termino: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAaWfmi89JtXqn1BtU1Kyqqdxl8xcu9bMbkVAH8zYABzzlzXwK9LrmGC54l8fq7vAsO275Dz5SS6LD6yrg'
    });  

      return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20`, { headers })
      .pipe( map( data => data['artists'].items));
  }
}
