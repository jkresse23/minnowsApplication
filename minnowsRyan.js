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

	//console.log(this.ageGroups);


	this.ageSubmit = function() {

		this.showEvents = true;

		console.log(this.ageGroupChosen);
		console.log(this.ageGroupChosen.event);

	}


	this.eventSubmit = function (eventChosen) {

		console.log(this.ageGroupChosen);

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

		this.swimmerChosen.swimmerTime = this.displayedTimer;

		console.log(this.swimmerChosen);

		console.log(this.ageGroups);

	};

	
}]);
