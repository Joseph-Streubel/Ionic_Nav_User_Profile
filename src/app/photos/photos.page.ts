import { Component, OnInit } from '@angular/core';

interface Photo {
  url: string;

}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

    photos: Photo[] = [
      {
        url: 'https://picsum.photos/id/237/200/300',
      },
      {
        url: 'https://picsum.photos/id/238/200/300',
      },
      {
        url: 'https://picsum.photos/id/239/200/300',
      },
      {
        url: 'https://picsum.photos/id/240/200/300',
      },
      {
        url: 'https://picsum.photos/id/250/200/300',
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
