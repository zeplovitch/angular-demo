import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService, Events } from './loading-spinner.service';
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
  httpRequestSub: Subscription;
  httpResponseSub: Subscription;
  enabled = false;
  queue = [];
  timerId: number = null;
  timerHideId: number = null;
  constructor(private loadingSpinnerService: LoadingSpinnerService) { }

  ngOnInit(): void {
    this.httpRequestSub = this.loadingSpinnerService.on(Events.httpRequest, (() => {
      this.queue.push({});
      if (this.queue.length === 1) {
        this.enabled = true;
      }
    }));
    this.httpResponseSub = this.loadingSpinnerService.on(Events.httpResponse, (() => {
      this.queue.pop();
      if (this.queue.length === 0) {
        if (this.queue.length === 0) { this.enabled = false; }
      }
    }));
  }
  ngOnDestroy() {
    this.httpRequestSub.unsubscribe();
    this.httpResponseSub.unsubscribe();
  }
}
