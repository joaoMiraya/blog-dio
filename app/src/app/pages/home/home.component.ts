import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', './home.component-responsive.css'],
    imports: [HeaderComponent, MenuTitleComponent, BigCardComponent, SmallCardComponent]
})
export class HomeComponent {

}
