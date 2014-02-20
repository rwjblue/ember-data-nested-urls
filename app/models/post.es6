export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  comments: DS.hasMany('comment', {async: true})
});
