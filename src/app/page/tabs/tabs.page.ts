import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';
import{AboutPage} from 'src/app/about/about.page';
import { CitiesPage } from '../cities/cities.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }
tab1Root = HomePage;
tab2Root = AboutPage;
tab3Root = CitiesPage;

  ngOnInit() {
  }

}
