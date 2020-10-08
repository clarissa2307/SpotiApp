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
      'Authorization': 'Bearer BQDrY66nA79Ax6cZpYXmNYUcR73GRMa9I-yhNogdLgRB3xtNzRA5YvEisFzG-rF473ylM7tlcofsOIDTa-w'
    });  

      return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
          
  }

  getArtista( termino: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDrY66nA79Ax6cZpYXmNYUcR73GRMa9I-yhNogdLgRB3xtNzRA5YvEisFzG-rF473ylM7tlcofsOIDTa-w'
    });  

      return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20`, { headers });
  }
}
