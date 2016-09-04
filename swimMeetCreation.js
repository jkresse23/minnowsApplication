/* The user should be able to create a meet by choosing teams, setting a date,
and setting a time.

I want to use what I learned regarding Angular forms and custom directives.

so now I can create a new addedmeet object upon submit with the address and the pool and add that
to a list of meets.  Now I want to get the team checkboxes working, along with a date and a custom message.
*/

var app = angular.module("app", ["checklist-model"]);

app.factory("teamFactory", function() {

  var teamFactory = [
    {teamName : "Hobcaw Barracudas"},
    {teamName : "SneeFarm Sharks"},
    {teamName : "Sawgrass Stingrays"},
    {teamName : "Daniel Island Dogfish"},
    {teamName : "James Island Jellyfish"}
  ];

  return teamFactory;
});

app.factory("locationFactory", function() {

  var locationFactory = [
    {pool : "Hobcaw Community Pool", address: "321 Bearclaw Rd., Mt. Pleasant"},
    {pool : "Sneefarm Community Pool", address: "463 Flyway Dr., Sullivans Island"},
    {pool : "West Ashley Recreation Center", address: "354 St. Mark's Way, West Ashley"},
    {pool: "Family Circle Pool", address: "567 Bishop Way, Danie Island"},
    {pool : "James Island Creek Natatorium", address: "12 Trojan St., James Island"}
  ];

  return locationFactory;
});

/* What I want to do is create a meet object that includes the properties entered in the form.  And
I want a new meet object to be created on every submission.

The first step could be creating an empty object on submit.  Submit button is working.
*/
/*app.factory("newMeetFactory", function (pool, address){

var newMeet = {
this.pool = pool;
this.address = address;
};
return newMeet;

});*/
app.controller("pickTeams", ["teamFactory", "locationFactory", function (teamFactory, locationFactory) {

  this.teamsAvailable = teamFactory;

  console.log(this.teamsAvailable);

  this.poolsAvailable = locationFactory;

  this.meetList = [];

  this.teamsChosen = [];



  this.meetSubmit = function (locationChosen) {

    this.NewMeet = function (location, team) {
      this.pool = location.pool;
      this.address = location.address;
    };

    console.log(this.teamChosen);

    this.addedMeet = new this.NewMeet(this.locationChosen);

    console.log(this.addedMeet);

    this.addedMeet.meetTeams = this.teamsChosen;

    this.addedMeet.meetNotes = this.meetMessage;

    this.meetList.push(this.addedMeet);

    console.log(this.meetList)

  };
}]);
