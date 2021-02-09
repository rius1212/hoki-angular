import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTESADMIN: RouteInfo[] = 
    [
        { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: ''},
        // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
        // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
        // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
        // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
        // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
        // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
        { path: '/kategori',      title: 'Master Kategori',   icon:'nc-single-copy-04',     class: ''},
        { path: '/barang',        title: 'Master Barang',     icon:'nc-box-2',     class: ''},
        { path: '/supplier',        title: 'Master Supplier',     icon:'nc-badge',     class: ''},
        { path: '/logout',        title: 'Logout',            icon:'nc-spaceship',     class: 'active-pro'},

    ];
export const ROUTESUSER: RouteInfo[] = 
    [
        { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
        // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
        // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
        // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
        // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
        // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
        // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
        { path: '/pembelian',     title: 'Pembelian',         icon:'nc-bag-16',     class: ''},
        { path: '/logout',        title: 'Logout',            icon:'nc-spaceship',     class: 'active-pro'},

    ];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItemsAdmin: any[];
    public menuItemsUser: any[];
    title:string;
    ngOnInit() {
        this.menuItemsAdmin = ROUTESADMIN.filter(menuItem => menuItem);
        this.menuItemsUser = ROUTESUSER.filter(menuItem => menuItem);
        this.title = localStorage.getItem('data');
    }
}
