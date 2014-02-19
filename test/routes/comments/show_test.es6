import CommentsShowRoute from 'app/routes/comments/show';

var route, store;

module('Unit - CommentsShowRoute', {
  setup: function(){
    store = {};

    route = CommentsShowRoute.create({
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
