import Ember from 'ember';
import layout from '../templates/components/zipcode-input';

export default Ember.TextField.extend({
  keyPress(e) {
    var code = e.which, str = this.get("value") || "";

    if (Ember.typeOf(code) !== "number" || code === 8) {
      return;
    }

    str += String.fromCharCode(code);
    if (!str.match(/^[\d]*$/) || str.length > 5) {
      e.preventDefault();
    }
  }
});
