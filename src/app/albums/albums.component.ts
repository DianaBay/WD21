import { Component, OnInit } from '@angular/core';
import {Album, Photo} from '../models';
import {ALBUM} from '../database';
import { AlbumsService } from '../albums.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  loaded: boolean;
  newAlbum: string;
  photos: Photo[];
  constructor(private albumsService: AlbumsService,
              private location: Location) {
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums(){
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }

  goBack(){
    this.location.back();
  }

  addAlbum(){
    const album = {
      title: this.newAlbum
    };
    this.loaded = false;
    this.albumsService.addAlbum(album as Album).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }


}
