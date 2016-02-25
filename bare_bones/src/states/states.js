
var postView = Backbone.View.extend({
  initialize: function(){
    console.log(this.$el.html());
    _.bindAll(this, ['chartData', 'render'])
  },

  render: function() {
    this.$el.html( '<div class=\'item clearfix\'>'+
    '  <div class=\'post\'>'+
    '    <div class=\'profile\'>'+
    '      <div class=\'avatar\'><img src=\'' + this.model.author_avatar + '\'/></div>'+
    '      <div class=\'name\'>' + this.model.author_name  + '</div>'+
    '    </div>'+
    '    <div class=\'post-content\'>'+
    '      <div>' + this.model.content + '</div>'+
    '      <img src=' + this.model.image + ' />'+
    '    </div>'+
    '  </div>'+
    '  <div class=\'metrics\'>'+
    '    <div class=\'oraganic-vs-paid\'>'+
    '      <div class=\'chart\'>'+
    '        <h1>HERE IS A CHART</h1>'+
    '        <div class=\'chart\' ></div>'+
    '      </div>'+
    '    </div>'+
    '  </div>'+
    '</div>');
    this.$el.find('.chart').highcharts(this.chartData());
    return this.el;
  },

  chartData: function() {

    var getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (10 - 0)) + 0;
    };

    return {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Organic vs Paid'
        },
        xAxis: {
            categories: ['']
        },
        yAxis: {
            title: {
                text: 'Engagement'
            }
        },
        series: [{
            name: 'Organic',
            data: [getRandomInt()]
        }, {
            name: 'Paid',
            data: [getRandomInt()]
        }]
    };
  }

});

var _postsHtml = function(posts) {
  return _.map(posts, function(post) {
    return new postView({model: post}).render();
  })
};

// charts
var getSemiCircleDonut = function() {

};

// show all the posts
stateViews.showAllPosts = function(data) {
  return _postsHtml(data);
};

// for testing
stateViews.greet = function(data) {
  return "<h1>" + data.content + "</h1>\n" +
    "<button onClick=\"JavaScript:actions.action('" + data.action + "')\">" + data.cta + "</button>";
};
