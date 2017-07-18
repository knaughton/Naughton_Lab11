$(document).ready(function () {




  $.get('https://www.reddit.com/r/golf.json').done(function(responseBody) {

    var x = responseBody.data.children;
    x.forEach(function(item) {

      $('.container')
      .append('<div class="Box"><h4 class="title">'+ item.data.title + '</h4>' + '<img src=' + item.data.thumbnail + '>' + '<h6 class="author">' + item.data.author + '</h6></div');


    })
    console.log(responseBody);
  });
})
