import Backbone from 'backbone'; 
import $ from 'jquery';
import CartoonCollection from './carton_collection';
import listTemplate from '../views/cartoon_list';
import artistTemplate from '../views/individual_view';

var Router = Backbone.router.extend({

  routes: {
    '': 'cartoonlist',
    'individualView/:id' : 'showIndividualCartoon'
  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.cartoon = new CartoonCollection();

    let router = this;

    this.$el.on('click', '.cartoon-list-item', function(event) {
      let $div = $(event.currentTarget);
      let cartoonId = $div.data('cartoon-id');
      router.navigate(`cartoons/${cartoonId}`);
      router.showIndividualCartoon(cartoonId);
      // back to home button
      let backButton = $('.back');
      backButton.on('click', function(event) {
        let $div = $(event.currentTarget);
        router.navigate(`''`);
        router.cartoonList();
      })
    });

  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  artistList: function() {
    this.showSpinner();
    console.log('grabbing cartoons');
    this.cartoons.fetch().then(function() {

    this.$el.html(listTemplate(this.cartoons.toJSON()));

    }.bind(this));
  },

  showIndividualCartoon: function(artistId) {
    console.log('show individual artists');
    let cartoon = this.cartoons.get(cartoonId);
    
    if (cartoon) {
      this.$el.html(cartoonTemplate(cartoon.toJSON()));  
    } else {
      let cartoon = this.cartoons.add({objectId: cartoonId});
      let router = this;
      this.showSpinner();
      cartoon.fetch().then(function () {
        cartoon.$el.html(cartoonTemplate(cartoon.toJSON()));
      });
    }
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;