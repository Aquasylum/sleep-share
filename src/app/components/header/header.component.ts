import { Component, OnInit } from '@angular/core';
import { UserData } from '../../models/userData.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'sleep-share-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  user: UserData = {
    name: 'Hendrik',
    status: 'Going to be a great day for Eureka',
    sleepScore: 88,
    readinessScore: 76,
    activityScore: 45,
  };

  ngOnInit(): void {}

  authenticateUser() {
    this.authService.authenticate();
  }
}
