$(document).ready(function () {
//variable to store the value of the current selected option 
  var userSelect = '';

  $('.selector').on('change', function () {
    userSelect = this.value;
    //if the user selected home, the url should look like below
    //var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json';
    alert(url);
    url += '?' + $.param({
      'api-key': "049673d3a2eb4eda9c6bb4ec46c49cf5",
      'callback': "12"
    });
    $.ajax({
      url: url,
      method: 'GET',
    })
      .done(function (result) {
        console.log(result);

        //var dataSet = result.filter(isBigEnough).splice(12);
        //console.log(dataSet);
        var dataSet = result;
        // console.log('dataSet' + dataSet);     
        //console.log(dataSet.results.multimedia[3]);

        if (dataSet.results.length > 0) {


          $.each(dataSet.results, function (index, value) {
            var changeInput = $('.selector').val();
            console.log(changeInput)
            /*
            set the newsImageLink to empty and only add
            the image link if there is stuff in it
             */
            var newsImageLink = '';
            //debugger;
            if (value.multimedia.length) {
              newsImageLink = value.multimedia[3].url;
              console.log(newsImageLink);
            }
            $('.news').append('<li class="results_wrap"><h3 class="h1result">' + value.title + '</h3><img src=' + newsImageLink + ' /></li>');
          })
        }
        else {
          alert('got no data back from server');
        }
      })
      .fail(function (err) {
        throw err;
      });
  });

}); //end of select change - the user selected something

function isBigEnough(value) {
  return value >= 4;
}

//var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// function processArray(inputArray) {
//   var filteredMulimediaArray = [inputArray.multimedia.length].filter(isBigEnough);
//   return filteredMulimediaArray; 
// }

// }); 






// $(document).ready(function () {

//   // Built by LucyBot. www.lucybot.com
// var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
// url += '?' + $.param({
//   'api-key': "049673d3a2eb4eda9c6bb4ec46c49cf5",
//   'callback': "12"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
//});
// var selectedValue =''; 
// $('select').on('change',function() {
//   selectedValue = this.value;
//   alert(selectedValue);
//   return selectedValue;
// });

// console.log(selectedValue);
// //var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
// url += '?' + $.param({
//   'api-key': "049673d3a2eb4eda9c6bb4ec46c49cf5",
//   'callback': '12',
//   'q': "sports"
// });
// console.log(url);
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);

//   var data = result;
  // if (data.length > 0) {
  //   alert('here');
  // }
  // else
  // {
  //   alert('Nothing back from NY times');
  // }
  //console.log(data);

  // $.each(data.results, function (index, value) {
  //     var imageUrl = value.multimedia[1].url;
  //     console.log(imageUrl);
  //     console.log(value.multimedia.length);
  //     // console.log()
  //     $('.news1').append('<div class="results_wrap"><h1 class="h1result">'+value.lead_paragraph+'</h1><img src="'+ 'http://www.nytimes.com/' +value.multimedia[1].url+'" /></div>');

  //                          });

  //console.log(result.response.docs[0].lead_paragraph);
  //console.log(result.response.docs[0].multimedia[1].url);

  //var imageUrl = result.response.docs[0].multimedia[1].url;
  //$('.imageContainer').append('<img  src="http://www.nytimes.com/' + imageUrl + '" />' );

// }).fail(function(err) {
//   throw err;
// });
// })