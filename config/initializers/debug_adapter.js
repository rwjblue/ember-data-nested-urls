// A fix for the ember chrome extension so that we can peek into the data store
// see https://github.com/stefanpenner/ember-app-kit/issues/263#issuecomment-28482992

/* global require */
DS.DebugAdapter.reopen({
  getModelTypes: function() {
    var self = this;
    return Ember.keys(requirejs._eak_seen).filter(function(key) {
      return !!key.match(/^app\/models\//) && self.detect(require(key)['default']);
    }).map(function(key){
      var type = require(key)['default'];
      var typeKey = key.match(/^app\/models\/(.*)/)[1];
      type.toString = function() { return typeKey; };
      return type;
    });
  }
});
