var VideoListView = Backbone.View.extend({

  render: function() {
    var context = this;
    console.log(context.collection);
    console.log(context.fakeVids); 
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.models.forEach(function(video) {
      var vid = new videoListEntryView({model: video}); 
    }, this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')
  
});
