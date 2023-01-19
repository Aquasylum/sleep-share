import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../../models/userData.model';

@Component({
  selector: 'sleep-share-display-friend-data',
  templateUrl: './display-friend-data.component.html',
  styleUrls: ['./display-friend-data.component.css'],
})
export class DisplayFriendDataComponent implements OnInit {
  @Input() userData!: UserData;

  constructor() {}

  ngOnInit(): void {}
}
