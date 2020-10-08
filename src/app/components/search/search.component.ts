import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {

  artistas: any[] = [];
  loading: boolean;

  constructor(private Spotify: SpotifyService) { }

  buscar(termino: string) {
    console.log(termino);

    this.loading = true;
    this.Spotify.getArtista( termino )
       .subscribe( (data: any) => {
           console.log(data);
           this.artistas = data;
           this.loading = false;
       });

  }
  
}
