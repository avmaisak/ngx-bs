import {
  Directive, Input, OnInit,
} from '@angular/core';

import { BsGlobals } from '../../../bs.globals';
import { BsBaseDirective } from './bs-base.directive';

@Directive({
  selector: '[bs-container]',
})
export class BsContainerDirective extends BsBaseDirective implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('bs-fluid') public fluid!: string | boolean;

  public ngOnInit(): void {
    const elClassList = this._elementRef.nativeElement.classList;
    let containerStyle = BsGlobals.Container;

    if (elClassList.contains(BsGlobals.Container)) elClassList.remove(BsGlobals.Container);
    if (elClassList.contains(BsGlobals.ContainerFluid)) elClassList.remove(BsGlobals.ContainerFluid);
    if (this.fluid) containerStyle = BsGlobals.ContainerFluid;

    let resultClass = '';

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.bp && this._breakPointCorrect ? resultClass = `${containerStyle}-${this.bp}` : resultClass = containerStyle;

    elClassList.add(resultClass);
  }
}
