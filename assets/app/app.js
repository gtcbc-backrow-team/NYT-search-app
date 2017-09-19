//var searchTerm = document.getElementById('search-term');


$("#searchButton").click(function() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "477aaaa9fcad46968341169b0db2ef96",
      "q": document.getElementById('search-term').value,
      "begin_date": "19990410",
      "end_date": "20160410"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);

      document.getElementById("articleSection").innerHTML = result.response.docs["0"].web_url;

    }).fail(function(err) {
      throw err;
    });
    
})

