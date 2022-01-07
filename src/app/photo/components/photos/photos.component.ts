import { Component, Input } from '@angular/core';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photos',
  template: `
    <div class="photos">
      <div *ngFor="let photo of photos" class="photo">
        <img
          [appPhotoSelected]="photo"
          [mode]="withSelectedOption"
          src="{{ photo.url_q }}"
          alt="{{ photo.title }}"
        />
      </div>
    </div>
  `,
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent {
  @Input() photos!: Photo[];
  @Input() withSelectedOption = true;

  constructor() {}
}
