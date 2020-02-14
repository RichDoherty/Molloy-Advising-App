import { Mongo } from 'meteor/mongo';
import { DDP } from 'meteor/ddp-client';

export const Courses = new Mongo.Collection('courses');

if (Meteor.isServer) {
  /*
  Courses.insert({
    "_id": "5e2ee5791c9d440000e92df4",
    "major_id": "1",
    "course_id": "110",
    "code": "CIS110",
    "course_Name": "Database Design",
    "course_Description": "Learn to connect tables"
  });
  */
  console.log(Courses.find({}).fetch());
  Meteor.publish('courses', function coursePublication() {
    return Courses.find({});
  });
}
