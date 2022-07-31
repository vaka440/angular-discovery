import { Component, OnInit, OnDestroy } from '@angular/core';
import { catchError, Subscription, switchMap, tap } from 'rxjs';
import { Photo } from '../../models/photo';
import { PhotoApiService } from '../../services/photo-api.service';
import { PhotoStoreService } from '../../services/photo-store.service';

@Component({
  selector: 'app-search-photos',
  template: `
    <h2>HOME</h2>

    <app-search
      (termEvent)="onTermEvent($event)"
      [term]="term$.value"
    ></app-search>
    <hr />
    <app-photos [photos]="photos"></app-photos>
    <p *ngIf="interact.loading">loading...</p>
    <p *ngIf="interact.error">Erreur !</p>
  `,
  styleUrls: ['./search-photos.component.scss'],
})
export class SearchPhotosComponent implements OnInit, OnDestroy {
  photos?: Photo[];
  sub?: Subscription;
  term$ = this.photoStore.getTerm();
  interact = { loading: false, error: false };

  constructor(
    private photoApi: PhotoApiService,
    private photoStore: PhotoStoreService
  ) {}

  ngOnInit(): void {
    this.sub = this.term$
      .pipe(
        tap(() => (this.interact = { loading: true, error: false })),
        switchMap((term: string) => this.photoApi.searchPublicPhotos(term)),
        catchError((error: any) => {
          console.log(error);
          this.interact = { loading: false, error: true };
          return [];
        })
      )
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
        this.interact = { loading: false, error: false };
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onTermEvent(term: string) {
    this.photoStore.getTerm().next(term);
  }
}
