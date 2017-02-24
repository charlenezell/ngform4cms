import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css']
})
export class InputTimeComponent implements OnInit {
  @Input() desc;
  @Input() name;
  constructor() { }

  ngOnInit() {
  }

}
