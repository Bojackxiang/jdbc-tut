import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navBarElements = [{ name: 'Run refresh script', id: 1 }, { name: 'Run payout refresh script', id: 2 }];

  constructor() { }

  ngOnInit() {
  }

  buttonClicked(event, id) {
    event.preventDefault();
    console.log(id);
  }

}
