stateViews.greet = function(data) {
  return "<h1>" + data.content + "</h1>\n" +
    "<button onClick=\"JavaScript:actions.action('" + data.action + "')\">" + data.cta + "</button>";
}
