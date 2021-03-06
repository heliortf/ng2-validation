import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../facade/lang';

export const gt = (gt: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (isPresent(Validators.required(control))) return null;

    let v: number = +control.value;
    return v > +gt ? null : {gt: true};
  };
};
