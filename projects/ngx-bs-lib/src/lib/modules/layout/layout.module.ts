import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BsContainerDirective } from './directives';

@NgModule({
  declarations: [BsContainerDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    BsContainerDirective,
  ],
})
export class LayoutModule { }
