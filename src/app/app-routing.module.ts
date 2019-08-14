import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewsDetailsComponent} from './news-details/news-details.component'
import {NewsListComponent } from './news-list/news-list.component'

const routes: Routes = [
  { path: '', component: NewsListComponent},
  { path: 'details', component: NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
