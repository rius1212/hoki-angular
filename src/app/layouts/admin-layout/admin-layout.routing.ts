import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

// Define Hoki
import { LogoutComponent } from '../../pages/logout/logout.component';
import { KategoriComponent } from '../../pages/kategori/kategori.component';
import { BarangComponent } from '../../pages/barang/barang.component';
import { SupplierComponent } from '../../pages/supplier/supplier.component';
import { PembelianComponent } from '../../pages/pembelian/pembelian.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

    // hoki define
    { path: 'logout',      component: LogoutComponent },
    { path: 'kategori',      component: KategoriComponent },
    { path: 'barang',      component: BarangComponent },
    { path: 'supplier',      component: SupplierComponent },
    { path: 'pembelian',      component: PembelianComponent },
];
