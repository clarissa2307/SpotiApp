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

   getQuery( query: string ) {
     const url = `https://api.spotify.com/v1/${ query }`;
     
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCugBVoC5akZBWO9GWml8JFX5-xf9kWSNfjmyqeGsT0qlzM2jJfiMrczyxoVtWh0lXMduDYKxMKFS4UBzs'
    });
    return this.http.get(url, { headers });
  }


   getNewReleases() {
      
    return this.getQuery('browse/new-releases')
        .pipe( map( data => data['albums'].items));
  }

  getArtista( termino: string ) {

      return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
          .pipe( map( data => data['artists'].items));
  }
}
