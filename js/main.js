$(document).ready(function () {
    // var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    // url += '?' + (
    //     'api-key=' + "049673d3a2eb4eda9c6bb4ec46c49cf5"
    // );
    // $.ajax({
    //     url: url,
    //     method: 'GET',
    // }).done(function (results) {
    //     console.log(url);
    //     console.log(results);
    // }).fail(function (err) {
    //     console.log(url);
    //     throw err;
    // });

    //var str = '72   97  112 112 121';
    //alert(String.fromCharCode(72,   97,  112, 112, 121, 32, 98,  105, 114, 116, 104, 100, 97 , 121, 32, 87,  97 , 114, 114, 101 ,110) );
$('select').on('change',function() {
  console.log(this.value);
  alert(this.value);
});


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "049673d3a2eb4eda9c6bb4ec46c49cf5",
  'q': "sports"
});
console.log(url);
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
})