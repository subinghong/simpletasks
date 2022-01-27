import { Meteor } from 'meteor/meteor';
import { Tasks } from '../model/TasksCollection';

Meteor.publish('tasks', function publishTasks() {
  return Tasks.find();
});
