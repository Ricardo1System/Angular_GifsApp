import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifsService: GifsService){}

  get tags(){
    return this.gifsService.tagsHistory;
  }

  searchTag(tag:string){
    this.gifsService.searchTag(tag);
  }

}
