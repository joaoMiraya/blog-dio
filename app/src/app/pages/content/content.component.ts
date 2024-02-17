import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.component-responsive.css']
})
export class ContentComponent implements OnInit {

  id: string | number | null = "0"
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";


  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id: string | number | null) {
    const result = dataFake.filter(article => article.id == id)[0];
    this.photoCover = result.photo,
      this.contentTitle = result.title,
      this.contentDescription = result.description

  }
}
