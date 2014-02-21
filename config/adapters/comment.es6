import NestedUrlAdapter from './nested-url';

var get = Ember.get;

export default NestedUrlAdapter.extend({
  buildRecordURL: function(record){
    // post.id works properly for create/update, but prior to deleteRecord being called
    // the relationships are cleared (thus making post.id `null`).
    var postId = get(record, 'post.id') || get(record, 'data.post.id');

    return 'posts/' + postId + '/comments';
  }
});
