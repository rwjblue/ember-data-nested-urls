import CommentsNewRoute from 'app/routes/comments/new';

var route, store;

module('Unit - CommentsNewRoute', {
  setup: function(){
    store = {};

    route = CommentsNewRoute.create({
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
