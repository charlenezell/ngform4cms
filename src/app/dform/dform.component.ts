import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-dform',
  templateUrl: './dform.component.html',
  styleUrls: ['./dform.component.css']
})
export class DformComponent implements OnInit {
@Input() fields: Array<any>;
  constructor() {

  }
  ngOnInit() {
  }

}
