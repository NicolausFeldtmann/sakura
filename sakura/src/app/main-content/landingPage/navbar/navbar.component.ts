import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <div class="navIconArea">
        <img class="sakuraLogo" src="./../../assets/img/1_hero/PNG/sakura_logo.png">
      </div>
      <div class="linkArea">
        <a class="fontRaleway" href="#">MENU</a>
        <a class="fontRaleway" href="#">LOCATION</a>
        <a class="fontRaleway" href="#">ABOUT</a>
        <a class="fontRaleway phone" href="0176/5456534">
          <img class="phoneImg" src="./../../assets/img/1_hero/PNG/phone.png">
            0176 54564534
        </a>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
