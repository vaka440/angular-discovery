import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photo/components/photos/photos.component';
import { SearchPhotosComponent } from './photo/components/search-photos/search-photos.component';
import { SearchComponent } from './photo/components/search/search.component';
import { SelectedPhotosComponent } from './photo/components/selected-photos/selected-photos.component';
import { PhotoSelectedDirective } from './photo/directives/photo-selected.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchPhotosComponent,
    PhotosComponent,
    PhotoSelectedDirective,
    SelectedPhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
