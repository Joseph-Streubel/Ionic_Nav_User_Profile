import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/user-profile', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { 
    path: 'user-profile', 
    component: UserProfileComponent, 
    children: [
      { path: '', redirectTo: 'bio', pathMatch: 'full' },
      { path: 'bio', loadChildren: () => import('./bio/bio.module').then(m => m.BioPageModule) },
      { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsPageModule) },
      { path: 'friends', loadChildren: () => import('./friends/friends.module').then(m => m.FriendsPageModule) },
      { path: 'photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosPageModule) }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
