import { Injectable } from '@angular/core';
import { ALBUM } from './database';
import {Observable, of} from 'rxjs';
import {Album, Photo} from './models';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) {

  }

  // getAlbums() {
  //   return of(ALBUM);
  // }
  // getAlbum(id: number) {
  //   const album = ALBUM.find((x) => x.id === id);
  //   return of(album);
  // }
  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }
  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }
  updateAlbum(album: Album): Observable<Album>{
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }
  addAlbum(album: Album): Observable<Album> {
    // @ts-ignore
    return this.client.post(`${this.BASE_URL}/albums`, album);
  }
  getAlbumsPhotos(id: number): Observable<Photo[]> {
    // @ts-ignore
    return this.client.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
