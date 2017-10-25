var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    //getting inner kind in id
    this.set('videoKind', video.id.kind);
    this.set('etag', video.etag);
    this.set('kind', video.kind);
    this.set('snippet', video.snippet);
    this.set('channelTitle', video.channelTitle);
    this.set('liveBroadcastContent', video.liveBroadcastContent);
  },

  select: function() {
    this.trigger('select', this);
  },
  
  // getFakeVids: function() {
  //   this.set('fakeVidz': window.fakeVideoData) 
  // }
});
