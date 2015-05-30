/*****************************************************************************/
/* IssuesList: Event Handlers */
/*****************************************************************************/
Template.IssuesList.events({
});

/*****************************************************************************/
/* IssuesList: Helpers */
/*****************************************************************************/
Template.IssuesList.helpers({
	issues: function() {
		return Issues.find();
	},

	dueDateFormatted: function() {
		return moment(this.dueDate).format("MMM Do YY");
	},

	priorityHigh: function() {
		if (this.priority === "High")
			return true;
		else
			return false;
	},

	priorityMedium: function() {
		if (this.priority === "Medium")
			return true;
		else
			return false;
	},

	priorityLow: function() {
		if (this.priority === "Low")
			return true;
		else
			return false;
	},

});

/*****************************************************************************/
/* IssuesList: Lifecycle Hooks */
/*****************************************************************************/
Template.IssuesList.created = function () {
};

Template.IssuesList.rendered = function () {
};

Template.IssuesList.destroyed = function () {
};
