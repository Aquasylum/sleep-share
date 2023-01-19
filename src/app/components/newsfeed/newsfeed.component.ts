import { Component, OnInit } from '@angular/core';
import { UserData } from '../../models/userData.model';

@Component({
  selector: 'sleep-share-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
})
export class NewsfeedComponent implements OnInit {
  constructor() {}

  //this is fake data which should be recieved from API:
  user1: UserData = {
    name: 'Mila',
    status: 'Had a great nights rest',
    readinessScore: 49,
    sleepScore: 81,
    activityScore: 60,
  };

  user2: UserData = {
    name: 'Hercules',
    status: 'Feeling a bit grumpy',
    readinessScore: 25,
    sleepScore: 32,
    activityScore: 56,
  };

  user3: UserData = {
    name: 'Karina',
    status: 'Ready to tackle the day',
    readinessScore: 55,
    sleepScore: 71,
    activityScore: 45,
  };

  user4: UserData = {
    name: 'Martyn',
    status: 'Feeling on top of the world :)',
    readinessScore: 67,
    sleepScore: 71,
    activityScore: 65,
  };

  users: UserData[] = [this.user1, this.user2, this.user3, this.user4];

  ngOnInit(): void {}
}
