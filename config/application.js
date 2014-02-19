//= require jquery
//= require environment
//= require ember-appkit
//= require_self
//= require_tree ./adapters
//= require_tree ./serializers
//= require router
//= require_tree ../app
//= require_tree ./initializers

window.App = require('app').default.create();
