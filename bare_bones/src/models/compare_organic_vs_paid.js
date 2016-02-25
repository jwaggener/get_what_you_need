models.compareOrganicVsPaid = {

  data: {
    content: 'Hello World! Here i am!',
    cta: 'Hello!',
    action: 'hello'
  },

  present: function(resultOfAction) {
    return resultOfAction || this.data;
  },

  handleAction: function(actionName, data){ // , nextAction?
    if(actionName === 'showAllPosts' ) {
      view.present('#posts', stateViews.showAllPosts(this.present(actions.showAllPosts())));
    } else if(actionName === 'hello') {
      view.present('#main', stateViews.greet(this.present(actions.hello())));
    } else if (actionName === 'goodbye') {
      view.present('#main', stateViews.greet(this.present(actions.goodbye())));
    }
  }

}

_.bindAll(models.compareOrganicVsPaid, ['present', 'handleAction']);

models.compareOrganicVsPaid = _.merge(models.compareOrganicVsPaid, Backbone.Events);

models.compareOrganicVsPaid.listenTo(actions, 'action', models.compareOrganicVsPaid.handleAction);
