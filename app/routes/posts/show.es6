export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id);
  },
  actions: {
    destroyRecord: function(model) {
      var _this = this;
      model.destroyRecord().then(function() {
        _this.transitionTo('posts.index');
      });
    },

    destroyComment: function(post, comment) {
      post.get('comments').then(function(comments){
       comment.destroyRecord();
       comments.removeObject(comment);
      });
    },

    createComment: function(post, text) {
      var _this = this;

      post.get('comments').then(function(comments) {
        comments.createRecord({text: text}).save().then(function(){
          _this.set('newCommentText', null);
        });
      });
    }
  }
});
