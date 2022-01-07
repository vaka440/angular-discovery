import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPhotosComponent } from './selected-photos.component';

describe('SelectedPhotosComponent', () => {
  let component: SelectedPhotosComponent;
  let fixture: ComponentFixture<SelectedPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
