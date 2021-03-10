import { Component, OnInit } from '@angular/core';
import {Album, Photo} from '../models';
import {AlbumsService} from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private albumsService: AlbumsService) {
    this.photos = [];
  }
  photos: Photo[] = [];
  album!: any;
  loaded!: boolean;
  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum(){
    const routerParamsId = Number(this.route.snapshot.paramMap.get('id'));
    this.loaded = false;
    this.albumsService.getAlbum(routerParamsId).subscribe((album) => {
      this.album = album;
      this.loaded = true;
      this.Photos();
    });
  }

  // tslint:disable-next-line:typedef
  goBack() {
    this.location.back();
  }
  // tslint:disable-next-line:typedef
  Photos(){
    this.albumsService.getAlbumsPhotos(this.album.id).subscribe((photos) => {
      this.photos = photos;
    });
  }
}
