import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFriendDataComponent } from './display-friend-data.component';

describe('DisplayFriendDataComponent', () => {
  let component: DisplayFriendDataComponent;
  let fixture: ComponentFixture<DisplayFriendDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFriendDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFriendDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
