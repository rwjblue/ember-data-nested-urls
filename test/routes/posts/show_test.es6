import PostsShowRoute from 'app/routes/posts/show';

var route, store;

module('Unit - PostsShowRoute', {
  setup: function(){
    store = {};

    route = PostsShowRoute.create({
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
