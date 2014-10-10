Chatter.Message = DS.Model.extend({
  username: DS.attr( 'string' ),
  message: DS.attr( 'string' ),
  timestamp: DS.attr( 'date' )
})

Chatter.Message.FIXTURES = [
  {
    id: 1, 
    username: 'Max', 
    message: "'Yo whats up dawg! How's it hanging", 
    timestamp: new Date()
  }, 

  {
    id: 2, 
    username: 'Carl', 
    message: "Max! My main man, my brotha from another motha! Man, you the bomb dot com! lol", 
    timestamp: new Date()
  }, 

  {
    id: 3, 
    username: 'Mike', 
    message: "Hey guys guess what!?! I'm learning Ember.js from Jacob the Myth!!!", 
    timestamp: new Date()
  }
];



