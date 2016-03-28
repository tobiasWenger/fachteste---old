import Ember from 'ember';

export function toPrecision(params) {
  let number = params[0];
  let precision = params[1];

  let floatFix = Math.pow(10, -precision-2);

  number += floatFix;

  if (number) {
  	return number.toPrecision(precision);
  } else {
  	return '-';
  }
  
}

export default Ember.Helper.helper(toPrecision);
