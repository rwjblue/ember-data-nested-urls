Test Project for Nested Ember Data Models
=========================================

It has historically been difficult to deal with nested API urls from within an Ember Data model. This repo is simply
a testing ground to determine how to use `links` within a custom adapter to allow the nested API URL's to be used.

### How does it work?

I have created a custom adapter that you can inherit from, and add a `buildRecordURL` function that returns the url for your nested API call.

The magic happens in [config/adapters/nested_url.es6.erb](https://github.com/rjackson/ember-data-nested-urls/blob/master/config/adapters/nested_url.es6.erb),
which overrides the default `createRecord`, `deleteRecord`, and `updateRecord` hooks with ones that will call `buildURL` and pass the record into it.

This allows us to override the `buildURL` to check for a `buildRecordURL` method, which we call if it exists. If you do not provide a `buildRecordURL` then the standard
`buildURL` is called, and the normal ED url scheme is used.

### How do I use it?

1. Include the `nested_url` adapter in your project.
2. Inherit from it for your nested models.
3. Define a `buildRecordURL` method that returns the URL needed for create/update/delete.

For an example see [config/adapters/comment.es6](https://github.com/rjackson/ember-data-nested-urls/blob/master/config/adapters/comment.es6).
