var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet', 
        key: window.YOUTUBE_API_KEY,
        q: query, 
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      }
    });   
  },
  // add desired url 
  // write a fetch function which (I think) may be passed in an ajax 
    //modify fetch function to return 5 vids for side list
    //or search
    // all wrapped in data obj, per data request dicta 
    
  // write a parse function which returns an array of objects 
  // by which we instantiate models
  parse: function(response) {
    return response.items; 
  } 
});
