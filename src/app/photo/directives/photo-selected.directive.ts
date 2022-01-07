import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { Photo } from '../models/photo';
import { PhotoStoreService } from '../services/photo-store.service';

@Directive({
  selector: '[appPhotoSelected]',
})
export class PhotoSelectedDirective implements OnInit, OnDestroy {
  @Input() appPhotoSelected!: Photo;
  @Input() mode = true;
  selected = false;
  sub!: Subscription;

  constructor(private photoStore: PhotoStoreService) {}

  @HostBinding('style.border') border!: string;
  @HostBinding('style.cursor') cursor = '';

  @HostListener('click', ['$event.target'])
  onClick() {
    if (!this.mode) return;

    this.selected = !this.selected;

    this.updateStyles();

    if (this.selected) {
      this.photoStore.addPhoto(this.appPhotoSelected);
      return;
    }
    this.photoStore.removePhoto(this.appPhotoSelected);
  }

  ngOnInit(): void {
    if (!this.mode) return;

    this.sub = this.photoStore
      .getPhotosSelected()
      .pipe(
        switchMap((photos: Photo[]) =>
          photos.filter((photo: Photo) => photo.id === this.appPhotoSelected.id)
        )
      )
      .subscribe((photo: Photo) => {
        if (photo) {
          this.selected = true;
        }
        this.updateStyles();
      });
  }

  updateStyles() {
    this.border = this.selected ? '3px solid red' : 'none';
    this.cursor = 'pointer';
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
