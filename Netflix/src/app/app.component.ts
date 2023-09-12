import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Netflix';
  navBg: any;

  @HostListener('document:scroll') scrollOver() {

    console.log(document.body.scrollTop, 'scrolllength')

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navBg = {
        'background-color': "black"
      }
    }
    else {
      this.navBg = {}
    }
  }
}
