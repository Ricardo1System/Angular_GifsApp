import { Component } from '@angular/core';
import { GifsService } from '../../gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService:GifsService){}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
