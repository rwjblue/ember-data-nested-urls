import CommentsEditRoute from 'app/routes/comments/edit';

var route, store;

module('Unit - CommentsEditRoute', {
  setup: function(){
    store = {};

    route = CommentsEditRoute.create({
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
