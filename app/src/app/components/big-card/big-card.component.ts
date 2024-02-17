import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component-responsive.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  id: string | number = 0;
  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";

  constructor() {

  }
  ngOnInit(): void {
  }
}
