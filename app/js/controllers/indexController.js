Chatter.IndexController = Ember.ArrayController.extend({
  needs: 'application',

  actions: {
    createMessage: function() {
      console.log(this.get('newMessage'))
      var message = this.store.createRecord('message', {
        username: this.get('controllers.application.userName'),
        message: this.get('newMessage'),
        timestamp: new Date()
      });

    }
  }
});