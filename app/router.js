import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ft-selection');
  this.route('ft-allround');
  this.route('ft-unihockey');
  this.route('ft-korbball');
  this.route('ft-volleyball');
  this.route('settings');
  this.route('timer');
  this.route('ft-sub-menu');
});

export default Router;
