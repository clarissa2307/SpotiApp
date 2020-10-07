import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
   }
   getNewReleases() {
      
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDgW7y3Ld1XHUkgyd3kR_zcSvzA5jxhRmpWI9EUgrrlt7vKba3HCbgm889xLu7MMFBEHGTmaOsEs25vg2E'
    });  

      return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
          
  }
}
