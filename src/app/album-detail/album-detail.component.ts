import { Component, OnInit } from '@angular/core';
import {Album,Photo} from '../models';
import {ALBUM} from '../database';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  loaded: boolean;
  photos: Photo[];
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) {
    this.photos = [];
  }

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get("id"));
    // this.album = ALBUM.find((x) => x.id === id);
    this.getAlbum();
  }

  updateAlbum(){
    this.loaded = false;
    this.albumsService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  goBack() {
    this.location.back();
  }
  Photos(){
    this.albumsService.getAlbumsPhotos(this.album.id).subscribe((photos) => {
      this.photos = photos;
    });
  }
}
