$(document).ready(function(){
    // alert('jquery loaded');
    // $(".card-title").hide();

    // $ (".btn-primary").css ('background-color','red');

    var contentfulClient = contentful.createClient({
        accessToken: '6o_DMSyLI7OSMmd434UXyAb2ILGS2R9F7c5h_lmsYWI',
        space: '9gf6mhyw2bkx'
      })
      var PLAYER_CONTENT_TYPE_ID = 'players'
      var bodyHtml="";

      contentfulClient.getEntries({
        content_type: PLAYER_CONTENT_TYPE_ID
      })
      .then(function(entries) {
        console.log(entries.items);
        entries.items.forEach(element => {
            console.log(element.fields.name);
            console.log(element.fields.age);
            console.log(element.fields.headshot.fields.file.url);
        
            bodyHtml +=  '<div class="col-md-3"> \
            <div class="card" style="width: 18rem;"> \
                <img src="' + element.fields.headshot.fields.file.url + '" class="card-img-top"  alt="..."> \
                <div class="card-body"> \
                  <h5 class="card-title">' + element.fields.name + '</h5> \
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p> \
                  <a href="#" class="btn btn-primary">' +element.fields.age +'</a> \
                </div> \
              </div> \
        </div>'
        
        });
        $("#bodyHtml").append(bodyHtml);
      })
    //   $("#bodyHtml").append(bodyHtml);
  });