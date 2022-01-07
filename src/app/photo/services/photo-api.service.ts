import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Photo } from '../models/photo';
import { environment } from '../../../environments/environment';

export interface FlickrAPIResponse {
  photos: {
    photo: Photo[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoApiService {
  constructor(private http: HttpClient) {}

  public searchPublicPhotos(searchTerm: string): Observable<Photo[]> {
    return this.http
      .get<FlickrAPIResponse>(`${environment.urlFlickr}/services/rest/`, {
        params: {
          tags: searchTerm,
          method: 'flickr.photos.search',
          format: 'json',
          nojsoncallback: '1',
          tag_mode: 'all',
          media: 'photos',
          per_page: '15',
          extras: 'tags,date_taken,owner_name,url_q,url_m',
          api_key: 'c3050d39a5bb308d9921bef0e15c437d',
        },
      })
      .pipe(map((response) => response.photos.photo));
  }
}
