Chatter.LoginController = Ember.ArrayController.extend({
  needs: 'application',

  actions: {
    loginSubmit: function() {
      this.set('controllers.application.userName', this.get('userName'));
      //console.log(userName)
      this.transitionToRoute('index');
    }
  }
});