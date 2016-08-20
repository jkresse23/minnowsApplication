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

So now I have the event picker.  I just want to be able to choose the swimmer!
*/

var app = angular.module("app", []);

app.factory("ageGroupsFactory", function() {

	var ageGroupsFactory = [
		{ages : "Boys (6-7)", eventName : ["25m Free", "50m Back", "200m IM"]},
		{ages : "Girls (6-7)", eventName : ["25m Free", "50m Breast", "200m IM"]}
	];

	return ageGroupsFactory;
	});

app.controller("Controller1", function (ageGroupsFactory) {

	//this.ageGroups = [
		//{ages : "Boys (6-7)", eventName : ["25m Free", "50m Back", "200m IM"]},
	///	{ages : "Girls (6-7)", eventName : ["25m Free", "50m Breast", "200m IM"]}
	//];
	
	this.ageGroups = ageGroupsFactory;

	this.userSubmit = function() {
	
		alert("Hello");
		
		console.log(this.ageGroups);
		
		this.showEvents = true;
		
		console.log(this.ageGroupChosen);
		
		for (this.i = 0; this.i < this.ageGroups.length; this.i++) {
		
			if (this.ageGroupChosen== this.ageGroups[this.i].ages) {
				
				this.ageGroupEvents = this.ageGroups[this.i].eventName;
			
				console.log(this.ageGroupEvents);
				
				return "Match";
				
				} else {
				
				console.log("No Match!");
		
				};
				
		
			};
	
		
		
		//this.findRightAgeGroup = function (ageGroup) {
			
		//	return ageGroup = this.ageGroupChosen.ages;
			
		//	};
		
		//this.eventList = this.ageGroups.filter(this.findRightAgeGroup);
		
		//console.log(this.eventList);
		
		
		//this.ageGroupEvents = this.ageGroups.filter(function(obj) {
  			
  		//	return obj.ages == this.ageGroupChosen;
  		
  	//	});
  		
  	//	console.log(this.ageGroupEvents);

		
		
		
	}
		
	
});
		