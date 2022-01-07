import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPhotosComponent } from './photo/components/search-photos/search-photos.component';
import { SelectedPhotosComponent } from './photo/components/selected-photos/selected-photos.component';

const routes: Routes = [
  { path: 'home', component: SearchPhotosComponent },
  { path: 'selected-photos', component: SelectedPhotosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
