import PostsEditRoute from 'app/routes/posts/edit';

var route, store;

module('Unit - PostsEditRoute', {
  setup: function(){
    store = {};

    route = PostsEditRoute.create({
      store: store
    });
  },
  teardown: function(){
    Ember.run(route, 'destroy');
  }
});

test('it exist', function(){
  expect(2);

  ok(route);
  ok(route instanceof Ember.Route);
});
