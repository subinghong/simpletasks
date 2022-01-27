import { Meteor } from 'meteor/meteor';
import { Tasks } from '../model/tasksModel';

Meteor.publish('tasks', function publishTasks() {
  return Tasks.find();
});
