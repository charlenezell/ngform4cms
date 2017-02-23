import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dfield',
  templateUrl: './dfield.component.html',
  styleUrls: ['./dfield.component.css']
})
export class DfieldComponent implements OnInit {

  constructor() { }
  @Input() field;
  ngOnInit() {
  }

}
