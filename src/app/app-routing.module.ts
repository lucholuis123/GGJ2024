import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChaptersComponent } from './chapters/chapters.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'chapters/:chapterId', component: ChaptersComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
