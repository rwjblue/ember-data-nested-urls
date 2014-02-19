import PostsNewRoute from 'app/routes/posts/new';

var route, store;

module('Unit - PostsNewRoute', {
  setup: function(){
    store = {};

    route = PostsNewRoute.create({
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
