import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../../models/userData.model';
import { ScoreColor } from '../../models/scoreColor.enum';

@Component({
  selector: 'sleep-share-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css'],
})
export class ScoreDisplayComponent implements OnInit {
  constructor() {}

  @Input() isFriend!: boolean;
  @Input() userData!: UserData;

  sleepScoreColor!: ScoreColor;
  readinessScoreColor!: ScoreColor;
  activityScoreColor!: ScoreColor;

  ngOnInit(): void {
    if (this.userData.sleepScore <= 40) {
      this.sleepScoreColor = ScoreColor.red;
    }
    if (this.userData.sleepScore > 40 && this.userData.sleepScore <= 75) {
      this.sleepScoreColor = ScoreColor.orange;
    }

    if (this.userData.sleepScore > 75) {
      this.sleepScoreColor = ScoreColor.green;
    }

    if (this.userData.readinessScore <= 40) {
      this.readinessScoreColor = ScoreColor.red;
    }
    if (
      this.userData.readinessScore > 40 &&
      this.userData.readinessScore <= 75
    ) {
      this.readinessScoreColor = ScoreColor.orange;
    }

    if (this.userData.readinessScore > 75) {
      this.readinessScoreColor = ScoreColor.green;
    }

    if (this.userData.activityScore <= 40) {
      this.activityScoreColor = ScoreColor.red;
    }
    if (this.userData.activityScore > 40 && this.userData.activityScore <= 75) {
      this.activityScoreColor = ScoreColor.orange;
    }

    if (this.userData.activityScore > 75) {
      this.activityScoreColor = ScoreColor.green;
    }
  }
}
