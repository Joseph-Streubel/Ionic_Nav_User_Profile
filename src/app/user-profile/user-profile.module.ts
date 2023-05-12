import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { BioPageModule } from '../bio/bio.module';
import { PostsPageModule } from '../posts/posts.module';
import { FriendsPageModule } from '../friends/friends.module';
import { PhotosPageModule } from '../photos/photos.module';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    UserProfileRoutingModule,
    PostsPageModule
  ]
})
export class UserProfileModule { }