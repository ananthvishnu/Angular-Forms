import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  //? OBSERVABLE METHODS LESSION ***************************
  userActivated = false;
  private activatedSub!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //this is observable code
    this.userService.activatedEmitter.subscribe((didActivate) => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
