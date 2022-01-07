import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo/models/photo';
import { PhotoStoreService } from './photo/services/photo-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';
  photosSelected$!: Observable<Photo[]>;

  constructor(private photoStore: PhotoStoreService) {
    this.photosSelected$ = this.photoStore.getPhotosSelected();
  }
}
