import PostsIndexRoute from 'app/routes/posts/index';

var route, store;

module('Unit - PostsIndexRoute', {
  setup: function(){
    store = {};

    route = PostsIndexRoute.create({
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
