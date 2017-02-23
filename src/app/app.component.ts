import { Component } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(http:Http){

  }

  title = 'app works!';

}
