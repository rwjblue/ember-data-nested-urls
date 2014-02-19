import CommentsIndexRoute from 'app/routes/comments/index';

var route, store;

module('Unit - CommentsIndexRoute', {
  setup: function(){
    store = {};

    route = CommentsIndexRoute.create({
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
