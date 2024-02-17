import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','./small-card.component-responsive.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  id: string | number = 0;
  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";

  constructor() {

  }
  ngOnInit(): void {
  }

}
