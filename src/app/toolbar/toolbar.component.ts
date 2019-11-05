import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  menuOpened : boolean = false;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  clickMenu() { 
    this.menuService.toggle();
    this.menuOpened = !this.menuOpened;
  }

}
