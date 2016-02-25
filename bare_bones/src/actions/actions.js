actions.showAllPosts = function() {
  return fixtures.posts;
};

// some test functions
actions.hello = function() {
  return {
    content: 'hello!',
    cta: 'goodbye',
    action: 'goodbye'
  };
};
actions.goodbye = function() {
  return {
    content: 'goodbye!',
    cta: 'hello',
    action: 'hello'
  };
};

actions = _.merge(actions, Backbone.Events);

actions.action = function(name) {
  this.trigger('action', name);
};
