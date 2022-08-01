import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'photos',component:PhotosComponent},
  {path:'videos',component:VideosComponent},
  {path:'contact',component:ContactComponent},
  {path:'inscription',component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
