import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IEventType } from '../models/event-type';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit, OnDestroy {

  constructor() { }

  @Output()
  emitter = new Subject<IEventType>();

  @Input()
  qaInfo = {
    id: -1
  }

  ngOnInit(): void {
  }

  onAction1() {
    this.emitter.next({
      cmd: 'action1',
      data: this.qaInfo.id
    });
  }

  onAction2() {
    this.emitter.next({
      cmd: 'action2',
      data: this.qaInfo.id
    });
  }

  ngOnDestroy() {
    this.emitter.unsubscribe();
  }

}
