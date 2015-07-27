__RequiredAnalyticsUserData = null;
Meteor.startup(function(){
  __RequiredAnalyticsUserData = new Mongo.Collection('required-analytics-user-data');
});