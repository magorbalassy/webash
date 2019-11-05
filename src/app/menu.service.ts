import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Injectable()
export class MenuService {
	private drawer: MatDrawer;

	public setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
    console.log('drawer set in service: ',this.drawer);
	}

	public open() {
    console.log('open clicked');
    return this.drawer.open();
	}


	public close() {
		return this.drawer.close();
	}

	public toggle(): void {
		this.drawer.toggle();
	}
}

/*import { Injectable, EventEmitter } from '@angular/core';
// import { DrawerComponent } from './drawer/drawer.component';
import { MatDrawer } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class MenuService {
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { } 
 

  public toggle() {
    return this.sideNavToggleSubject.next(null);
  } 
}
*/