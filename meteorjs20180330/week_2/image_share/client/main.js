import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Images = new Mongo.Collection("images");
console.log(Images.find().count());

if (Meteor.isClient){
  console.log("this is client")


  //Template.images.helpers({images:image_data});
  Template.images.helpers({images:Images.find()});
  Template.images.events({
    'click .js-image':function(event){
      console.log(event);
      $(event.target).css('width','50px');
    },
    'click .js-del-image':function(event){
      var image_id = this._id;
      console.log(image_id);
      $("#"+image_id).hide("slow",function(){
        Images.remove({"_id":image_id});
      })
    }
  });
}
