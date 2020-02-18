import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel, NavigationError, NavigationEnd, NavigationStart, RouterEvent } from '@angular/router';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  constructor() {
  }

}
