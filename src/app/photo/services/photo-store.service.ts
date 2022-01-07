import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoStoreService {
  photosSelected$ = new BehaviorSubject<Photo[]>([]);
  term$ = new BehaviorSubject<string>('');

  constructor() {}

  getPhotosSelected(): Observable<Photo[]> {
    return this.photosSelected$.asObservable();
  }

  addPhoto(photo: Photo) {
    if (!this.photosSelected$.value.includes(photo)) {
      this.photosSelected$.next([...this.photosSelected$.value, photo]);
    }
  }

  removePhoto(photo: Photo) {
    const photos: Photo[] = this.photosSelected$.value.filter(
      (p: Photo) => p.id !== photo.id
    );
    this.photosSelected$.next(photos);
  }

  getTerm(): BehaviorSubject<string> {
    return this.term$;
  }
}
