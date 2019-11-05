import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { MatDrawer } from '@angular/material';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements AfterViewInit {
  @ViewChildren(MatToolbar) toolbar !: QueryList<MatToolbar>;
  @ViewChildren('drawer') drawer !: QueryList<MatDrawer>;

  constructor(private menuService: MenuService) { }

   ngAfterViewInit() {
    console.log('drawer bodycomp:',this.drawer,' toolbar : ',this.toolbar);
    this.menuService.setDrawer (this.drawer.first);
   }

}
