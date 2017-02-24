import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-json',
  templateUrl: './input-json.component.html',
  styleUrls: ['./input-json.component.css']
})
export class InputJSONComponent implements OnInit {
  @Input() desc;
  @Input() name;
  constructor() { }

  ngOnInit() {
  }

}
