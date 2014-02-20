export default DS.Model.extend({
  text: DS.attr('string'),
  post: DS.belongsTo('post')
});
