$(document).ready(function () {
   
  var userSelect = ''; //variable to store the value of the current selected option 
  var $news = $('.news');
  $news.empty(); //clear out the UL that store news section

  var $loadingMessage = $('#loading');
  $loadingMessage.hide(); //only display this $loadingMessage to users while we load news

  $('.selector').on('change', function () {
     
    $news.empty();
  //  $('.logo img').css('height', '140px').css('scale','0.75');
     $('header').addClass('headerCompact') ;
 //   $('.logo').css('padding-top', '4rem'); //animate the logo
    userSelect = this.value;
    //user feedback showing that the page is doing the search
    $loadingMessage.show();

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json';
    url += '?' + $.param({
      'api-key': "049673d3a2eb4eda9c6bb4ec46c49cf5",
      'callback': "12"
    });
    $.ajax({
      url: url,
      method: 'GET',
    })

      .done(function (result) {
        $loadingMessage.hide();
        //we filter out the mulimedia array for items with have data in the multimedia array
        //after that we select only 12 items from the results    
        var $dataSet = result.results.filter(function (item) {
          return item.multimedia.length;
        }).splice(0, 12);
       //console.log($dataSet)  ;
      $.each($dataSet, function(item, value){

        //variances & markups
        var newsString = '';
        var $newslink = value.url;
        var $abstract = value.abstract;
        var $newsimage = value.multimedia[4].url;
       
        newsString += '<li><a href=' + $newslink + ' target="_blank">';
        //newsString += '<p>'+ $abstract +'</p>';
        newsString += '<div class="newsimg" style="background-image: url( '+ $newsimage +' )">';

        newsString += '<div class="text-wrapper"><p>'+ $abstract +'</p></div></div>';
        newsString += '</></a></li>';
        console.log(newsString);

        // $('.news').append('<li class="results_wrap"><h3 class="h1result">' + value.abstract + '</h3><img src=' + value.multimedia[4].url + ' /></li>');
        $news.append(newsString);
      });

      }) //end of .done() part
      .fail(function (err) {
        $loadingMessage.hide();
        $('.error').append('<p>Sorry, there was an error pulling data from New York times</p>' + err);
      });
  }); //end of select change - the user selected something

}); //end of document ready










