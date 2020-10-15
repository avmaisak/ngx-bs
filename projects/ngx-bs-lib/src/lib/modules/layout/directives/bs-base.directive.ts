import { Directive, ElementRef, Input } from '@angular/core';

import { BsBreakoints } from '../../../common/bs.breakpoints';

@Directive({})
export class BsBaseDirective {
  @Input() public bp!: string;

  constructor(protected _elementRef: ElementRef) { }

  protected get _breakPointCorrect(): boolean {
    if (!this.bp) return false;
    return Object.values(BsBreakoints).map((x) => x.toString()).includes(this.bp);
  }
}
