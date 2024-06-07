import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = "Sameer";

  public message = "welcome to localhost 4200";

  public person = {
    "userName": "sameer",
    "age": 21,

  }

  public date = new Date();
}
