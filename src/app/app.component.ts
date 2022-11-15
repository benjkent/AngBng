import { Component } from '@angular/core';
import {products} from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngBng';
  products = products;

  share(){window.alert("say something")};
}
