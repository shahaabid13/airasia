import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { FaqsComponent } from '../pages/faqs/faqs.component';
import { GalleryDetailsComponent } from '../pages/gallery-details/gallery-details.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';
import { HomeComponent } from '../pages/home/home.component';
import { PackagesComponent } from '../pages/packages/packages.component';
import { ServicesComponent } from '../pages/services/services.component';
import { TermsConditionsComponent } from '../pages/terms-conditions/terms-conditions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:category', component: GalleryDetailsComponent },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('../pages/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      )
  },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: '**', redirectTo: '' }
];
