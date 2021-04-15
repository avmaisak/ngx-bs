import {
  Directive, Input, OnInit,
} from '@angular/core';

import { BsStyles } from '../../../common/bs.containers';
import { BsBaseDirective } from './bs-base.directive';

@Directive({
  selector: '[bs-container]',
})
export class BsContainerDirective extends BsBaseDirective implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('bs-fluid') public fluid!: string | boolean;

  public ngOnInit(): void {
    const elClassList = this._elementRef.nativeElement.classList;

    const containerStyle = BsStyles.Container;

    if (elClassList.contains(BsStyles.Container)) elClassList.remove(BsStyles.Container);
    if (elClassList.contains(BsStyles.ContainerFluid)) elClassList.remove(BsStyles.ContainerFluid);
    if (this.fluid) {
      elClassList.add(BsStyles.ContainerFluid);
      return;
    }
    let resultClass = '';
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.bp && this._breakPointCorrect ? resultClass = `${containerStyle}-${this.bp}` : resultClass = containerStyle;

    elClassList.add(resultClass);
  }
}
