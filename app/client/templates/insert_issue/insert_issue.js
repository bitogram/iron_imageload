/*****************************************************************************/
/* InsertIssue: Event Handlers */
/*****************************************************************************/
Template.InsertIssue.events({
});

/*****************************************************************************/
/* InsertIssue: Helpers */
/*****************************************************************************/
Template.InsertIssue.helpers({
});

/*****************************************************************************/
/* InsertIssue: Lifecycle Hooks */
/*****************************************************************************/
Template.InsertIssue.created = function () {
};

Template.InsertIssue.rendered = function () {
};

Template.InsertIssue.destroyed = function () {
};


/* 
   For EditIssue template
*/
Template.EditIssue.events({
});

Template.EditIssue.helpers({
    onError: function () {
      return function (error) { alert("BOO!"); console.log(error); };
    },
    onSuccess: function () {
      return function (result) { alert("YAY!"); console.log(result); };
    },
	beforeRemove: function() {
		return function(collection, id) {
			var doc = collection.findOne(id);
			if (confirm('Really delete "' + doc.title + '"?')) {
				this.remove();
			}
		};
	}
});