import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';


const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    children: [
      { path: '', redirectTo: 'bio', pathMatch: 'full' },
      { path: 'bio', loadChildren: () => import('../bio/bio.module').then(m => m.BioPageModule) },
      { path: 'posts', loadChildren: () => import('../posts/posts.module').then(m => m.PostsPageModule) },
      { path: 'friends', loadChildren: () => import('../friends/friends.module').then(m => m.FriendsPageModule) },
      { path: 'photos', loadChildren: () => import('../photos/photos.module').then(m => m.PhotosPageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
