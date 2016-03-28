import DS from 'ember-data';

export default DS.Model.extend({
  ftAllrounds: DS.hasMany('ft'),
  ftKorbballs: DS.hasMany('ft'),
  ftUnihockeys: DS.hasMany('ft'),
  ftVolleyballs: DS.hasMany('ft')
});