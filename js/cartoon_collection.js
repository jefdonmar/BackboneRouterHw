import Backbone from 'backbone';
import CartoonModel from './cartoon_model';


let CartoonCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/cartoonList',

  model: CartoonModel,

  parse: function(data) {
    return data.results;
  }


});

export default CartoonCollection;