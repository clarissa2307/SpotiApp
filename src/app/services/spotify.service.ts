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
      'Authorization': 'Bearer BQCSSwVRuVynZQ0yZw-Ef84Ba527P6h6Azg0v9ZFbkkaqx25t9MZGfwzzgkW4DUIaV2ll72Fo_QyrpifsB0'
    });  

      this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
         .subscribe( data => {
           console.log(data);
         });   
}
}
