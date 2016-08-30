/* I want to create a swim meet app with the following data structure, from smallest
to largest:

Season:
--Meets
--Teams
--Individual swimmers
--Individual Events
--Times from Individual Swimmers

The MVP of this product would likely be associating individual swimmers and their times
with events

controller is working.  I can get the events drop-down to show up upon submit, but I can't yet
get the events associated with that object to load.

I can get the events to show up the drop-down menu, but I can't select them from the drop-down menu!  Why
is this?!?

It has something to do with the options in the drop-down menu actually being "strings" instead of the actual
age groups themselves.  I think this issue may have to do with ageGroupsChosen.

So now I have the event picker.  Next, I want to create a new submit button to submit the event, which will
reveal the swimmers in that event and the name of the event.
*/

var app = angular.module("app", ['mgcrea.ngStrap']);

app.factory("ageGroupsFactory", function() {

	var ageGroupsFactory = [
		{ages : "Boys (6-7)",
		event :
		[
			{eventName : "25m Free", swimmers:
			[
				{swimmerName: "John"},
				{swimmerName: "Lori"},
				{swimmerName: "Ryan"}
			]
		},
		{eventName: "50m Back", swimmers:
		[
			{swimmerName: "Alicia"},
			{swimmerName: "Laura"},
			{swimmerName: "Ingrid"}
		]
	},
	{eventName: "200m IM", swimmers: [
		{swimmerName: "Leigh"},
		{swimmerName: "Leopold"},
		{swimmerName: "Henry"}
	]
}
]
},
{ages : "Girls (6-7)",
event :
[
	{eventName: "25m Free", swimmers: [
		{swimmerName: "Alan"},
		{swimmerName: "Jennifer"},
		{swimmerName: "Eric"}
	]
},
{eventName: "50m Breast", swimmers: [
	{swimmerName: "Margaret"},
	{swimmerName: "Morgan"},
	{swimmerName: "Cassie"},
	{swimmerName: "Vianca"}
]
},
{eventName: "200m IM", swimmers: [
	{swimmerName: "James"},
	{swimmerName: "Awni"},
	{swimmerName: "Will"}
]
}
]
}
];

return ageGroupsFactory;
});

app.controller("Controller1", ["$interval", "ageGroupsFactory", "$scope", function ($interval, ageGroupsFactory, $scope) {

	this.ageGroups = ageGroupsFactory;

	console.log(this.ageGroups);


	this.ageSubmit = function() {

		this.showEvents = true;

		console.log(this.ageGroupChosen);

		this.ageGroupEvents = [];

		var self = this;

		this.ageGroupPicked = this.ageGroups.filter(function (group) {

			return group.ages === self.ageGroupChosen;

		});

		console.log(this.ageGroupPicked);


		this.ageGroupEvents = this.ageGroupPicked[0].event.map(function (event) {

			return event.eventName;

		});

	}


	this.eventSubmit = function (eventChosen) {

		var self = this;

		this.eventChosenArray = this.ageGroupPicked[0].event.filter(function (eventPicked) {

			return eventPicked.eventName === self.eventChosen;

		});

		console.log(this.eventChosenArray);

		this.eventSwimmers = this.eventChosenArray[0].swimmers.map(function (swimmer) {

			return swimmer.swimmerName;

		});

		console.log(this.eventSwimmers);


		this.showSwimmers = true;

		this.swimmerSubmit = function (swimmerChosen) {

			this.showTimer = true;

			this.displayedTimer = 0;
		};

	};

	this.startTimer = function () {

		var self = this;

		this.startClock = $interval(function () {

			self.displayedTimer = self.displayedTimer + 1;

			console.log(self.displayedTimer);

		}, 1000);

	};

	this.stopTimer = function() {

		$interval.cancel(this.startClock);

		this.showSubmit = true;

	}

	this.submitTime = function () {

		console.log(this.swimmerChosen);

		var self = this;

		this.chosenSwimmer = this.eventChosenArray[0].swimmers.filter(function (swimmerPicked) {

			return swimmerPicked.swimmerName === self.swimmerChosen;

		});

		this.chosenSwimmer[0].swimmersTime = this.displayedTimer;

		console.log(this.chosenSwimmer);

	};




	//I think the next step here is to isolate the swimmer by filtering
	//an array of the swimmers in the event.  Then adding a property of time
	//to that event and setting it equal to displayedTimer.



	//console.log(this.displayedTimer);

	//I need to save this displayed time as a time for the swimmer in this event.
	//this.swimmerChosen.this.eventTime = this.displayedTimer;

	//console.log(this.swimmerChosen.this.eventTime);


}]);
