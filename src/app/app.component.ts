import { AfterViewInit, Component, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { IEventType } from './models/event-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('qa') qa: TemplateRef<any>;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(
    private vc: ViewContainerRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const self = this;
    this.dtOptions = {
      ajax: 'assets/data.json',
      columns: [
        {
          title: 'ID',
          data: 'id'
        },
        {
          title: 'First name',
          data: 'firstName'
        },
        {
          title: 'Last name',
          data: 'lastName'
        },
        {
          title: 'Actions',
          data: null,
          defaultContent: '',
          createdCell: (cell, _, rowData) => {
            const component = this.vc.createEmbeddedView(this.qa, {
              qaInfo: rowData,
              eventCapture: self.OnCaptureEvent.bind(this)
            });
            this.renderer.appendChild(cell, component.rootNodes[0]);
          },
          orderable: false,
          searchable: false
        }
      ]
    };

    setTimeout(() => {
      this.dtTrigger.next();
    }, 300);
  }

  OnCaptureEvent(event: IEventType) {
    console.log(event);
  }
}
