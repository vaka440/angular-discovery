import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from '../../models/photo';
import { PhotoStoreService } from '../../services/photo-store.service';

@Component({
  selector: 'app-selected-photos',
  template: `
    <h2>SELECTED PHOTOS</h2>
    <app-photos [photos]="photos" [withSelectedOption]="false"></app-photos>
  `,
  styleUrls: ['./selected-photos.component.scss'],
})
export class SelectedPhotosComponent implements OnInit, OnDestroy {
  photos!: Photo[];
  sub!: Subscription;

  constructor(private photoStore: PhotoStoreService) {
    this.sub = this.photoStore
      .getPhotosSelected()
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
