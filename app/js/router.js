Chatter.Router.map(function() {
  this.route('login', { path: '/' });
  this.route('index')
});

Chatter.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('message');
  }
});
