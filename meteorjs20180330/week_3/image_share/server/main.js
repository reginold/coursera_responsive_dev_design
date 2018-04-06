Images = new Mongo.Collection("images");

if (Meteor.isServer){
    Meteor.startup(function(){
        console.log("ddddddd");
        console.log(Images.find().count());
        if (Images.find().count() == 0){
            console.log(Images.find().count());
            for (var i=1;i<4;i++){
              Images.insert(
                  {
                      img_src:"img"+i+".jpg",
                      img_alt:"img"+i
                  }
              );
              console.log(Images.find().count());
            }

        }
    });
}
