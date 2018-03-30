import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Images = new Mongo.Collection("images");
console.log(Images.find().count());

if (Meteor.isClient){
  console.log("this is client")
  var image_data = [
    {
      img_src :"laptops.jpg",
      img_alt : "some laptops"
    },
    {
      img_src :"bass.jpg",
      img_alt : "bass"
    },
    {
      img_src:"beard.jpg",
      img_alt:"this is beard"
    }
  ];
  Template.images.helpers({images:image_data});
  Template.images.events({
    'click .js-image':function(event){
      console.log(event);
      $(event.target).css('width','50px');
    }
  });
}
