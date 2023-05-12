import { Component, OnInit } from '@angular/core';
import { Post } from '../IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  public posts: Post[] = [
    {
      id: 1,
      date: new Date(),
      title: 'My First Post',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id libero euismod, dignissim ipsum at, bibendum sapien. Donec blandit urna augue, et eleifend nisi fermentum ac. Nullam vulputate elit sed metus bibendum, sed eleifend velit dictum. Aliquam laoreet interdum felis, ut varius libero placerat vel. Morbi at sem ac mauris volutpat pretium nec eget mauris. Nunc posuere tellus nibh, eu eleifend quam bibendum id.'
    },
    {
      id: 2,
      date: new Date(),
      title: 'My Second Post',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id libero euismod, dignissim ipsum at, bibendum sapien. Donec blandit urna augue, et eleifend nisi fermentum ac. Nullam vulputate elit sed metus bibendum, sed eleifend velit dictum. Aliquam laoreet interdum felis, ut varius libero placerat vel. Morbi at sem ac mauris volutpat pretium nec eget mauris. Nunc posuere tellus nibh, eu eleifend quam bibendum id.'
    },
    {
      id: 3,
      date: new Date(),
      title: 'My Third Post',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id libero euismod, dignissim ipsum at, bibendum sapien. Donec blandit urna augue, et eleifend nisi fermentum ac. Nullam vulputate elit sed metus bibendum, sed eleifend velit dictum. Aliquam laoreet interdum felis, ut varius libero placerat vel. Morbi at sem ac mauris volutpat pretium nec eget mauris. Nunc posuere tellus nibh, eu eleifend quam bibendum id.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
