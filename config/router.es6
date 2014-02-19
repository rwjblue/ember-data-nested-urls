var Router = Ember.Router.extend({
  // Uncomment to change Ember's router to use the 
  // HTML5 History API
  // Please note that not all browsers support this!
  // You will also need to uncomment the greedy route matcher
  // in config/routes.rb

  // location: 'history'
});

Router.map(function() {
  this.resource('comments', function() {
    this.route('new');
    this.route('show', {path: ':comment_id'});
    this.route('edit', {path: ':comment_id/edit'});
  });
  this.resource('posts', function() {
    this.route('new');
    this.route('show', {path: ':post_id'});
    this.route('edit', {path: ':post_id/edit'});
  });
});

export default Router;
