import { Input, Component, OnInit } from '@angular/core';
let baseComponentId=0;
@Component({
  selector: 'app-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.css']
})

export class InputBaseComponent implements OnInit {
  @Input() desc;
  @Input() name;
  @Input() basecomponentid=`basecomponentid-${baseComponentId++}`;
  constructor() { }

  ngOnInit() {
  }

}
