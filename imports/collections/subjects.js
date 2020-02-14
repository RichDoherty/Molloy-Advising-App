import { Mongo } from 'meteor/mongo';
import { DDP } from 'meteor/ddp-client';

export const Subjects = new Mongo.Collection('subjects');

if (Meteor.isServer) {
  console.log(Subjects.find({}).fetch());
  Meteor.publish('subjects', function subjectPublication() {
    return Subjects.find({});
  });
}
