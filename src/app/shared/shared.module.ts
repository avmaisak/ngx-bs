import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { BsLayoutModule } from 'projects/ngx-bs-lib/src/lib/modules/layout/bs-layout.module';

@NgModule({
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons),
    BsLayoutModule,
  ],
  declarations: [],
  exports: [
    RouterModule,
    NgxBootstrapIconsModule,
    BsLayoutModule,
  ],
})
export class SharedModule { }
