import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BsLayoutModule } from '../../../projects/ngx-bs-lib/src/lib/modules/layout/bs-layout.module';
import { HomeRoutingModule } from './home-routing.module';
import { ContainersComponent } from './pages/containers/containers.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [IndexComponent, ContainersComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BsLayoutModule,
  ],
})
export class HomeModule { }
