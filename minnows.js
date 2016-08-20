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

var app = angular.module("app", []);

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
					 									  {swimmerName: "Cassie"}
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

app.controller("Controller1", function (ageGroupsFactory) {	

	this.ageGroups = ageGroupsFactory;
	
	console.log(this.ageGroups);
	

	this.ageSubmit = function() {
	
		alert("Hello");
		
		this.showEvents = true;
		
		console.log(this.ageGroupChosen);
		
		this.ageGroupEvents = [];
		
		for (this.i = 0; this.i < this.ageGroups.length; this.i++) {
			
			for (this.j = 0; this.j < this.ageGroups[this.i].event.length; this.j++) {
		
				if (this.ageGroupChosen == this.ageGroups[this.i].ages) {
					
					this.ageGroupEvents.push(this.ageGroups[this.i].event[this.j].eventName);
					
					console.log(this.ageGroupEvents);
					
					
					//this.ageGroupEvents = this.ageGroups[this.i].this.event.eventName[this.j];
			
					//console.log(this.ageGroupEvents);
				
					//console.log("Match");
					
					
					} else {
				
					console.log("No Match!");
					
					};
					
				}
				
			};	
		
	}

	/*
	
	this.eventSubmit= function () {
		
		//ng-model for event picker: ageGroups.ages.eventName
		this.showSwimmers = true;
		
		console.log(this.eventChosen);
		
		//console.log(this.ageGroupChosen.this.eventName);
		
		for (this.i = 0; this.i < this.ageGroupChosen.eventName.length; this.i++) {
		
			if (this.eventChosen== this.ageGroups.this.ageGroupChosen.eventName[this.i]) {
				
				this.eventSwimmers = this.ageGroups.this.ageGroupChosen.this.eventName.swimmers[this.i];
				
				console.log(this.eventSwimmers);
		
		//		this.ageGroupEvents = this.ageGroups[this.i].eventName;
			
		//		console.log(this.ageGroupEvents);
				
		//		return "Match";
				
		//		} else {
				
				//console.log("No Match!");
		//
		//		};
					
		
			}
	
		};
	
	};	
	*/
	
});
		