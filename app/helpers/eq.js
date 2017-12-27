import Ember from 'ember';

export function eq([a, b]/*, hash*/) {
  return a === b;
}

export default Ember.Helper.helper(eq);
