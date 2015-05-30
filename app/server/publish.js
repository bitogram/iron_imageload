
Meteor.publish('issues', function (userId) {
  //this.ready();
  return Issues.find({createdBy: userId});
});

Meteor.publish('posts', function () {
	return Posts.find({});
});

