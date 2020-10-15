import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LayouNavTopComponent } from './layou-nav-top/layou-nav-top.component';
import { LayoutRootComponent } from './layout-root/layout-root.component';
import { LayoutNavSideComponent } from './layout-nav-side/layout-nav-side.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [LayoutRootComponent, LayouNavTopComponent, LayoutNavSideComponent],
  exports: [LayoutRootComponent, LayouNavTopComponent],
})
export class LayoutModule { }
