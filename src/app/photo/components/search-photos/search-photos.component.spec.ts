import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPhotosComponent } from './search-photos.component';

describe('SearchPhotosComponent', () => {
  let component: SearchPhotosComponent;
  let fixture: ComponentFixture<SearchPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
