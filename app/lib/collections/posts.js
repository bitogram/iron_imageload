Posts = new Mongo.Collection('posts');


PostSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title for you item",
    max: 200
  },
  description:{
    type: String,
    label: "Description of your item",
    max: 1024
  },
  dollarValue: {
    type: Number,
    label: "Dollar value of your item",
    min: 1,
    max: 1000000
  },
  expireDate: {
    type: Date,
    label: "Expire Date",
    optional: true
  },
  createdBy: {
    type: String,
    autoValue: function() {
      return this.userId
    }
  },
  postedOn: {
    type: Date,
    autoValue: function() {
      // SK - need to make it work for all time zones
      return new Date();
    }
  },
  photos: {
    type: String,
    label: "Upload your photo here"
  }
});

Posts.attachSchema(PostSchema);


if (Meteor.isServer) {
  Posts.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

/*
  Posts.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
*/
}
