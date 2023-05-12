import { Component, OnInit } from '@angular/core';

interface Friend {
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  public friends: Friend[] = [
    {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Bob Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
