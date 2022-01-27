import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Task } from '../model/tasksModel';

Meteor.methods({
  'tasks.insert'(description) {
    check(description, String);

    if (!this.userId) {
      throw new Meteor.Error('Error adding task', 'Not authorized.');
    }

    const task = new Task();
    task.description = description;
    task.userId = this.userId;
    task.save();
  },
  'tasks.remove'(taskId) {
    check(taskId, String);

    if (!this.userId) {
      throw new Meteor.Error('Error removing task', 'Not authorized.');
    }

    const task = Task.findOne({ _id: taskId, userId: this.userId });
    if (!task) {
      throw new Meteor.Error('Error removing task', 'Access denied.');
    }
    task.remove();
  },

  'tasks.setDone'(taskId) {
    check(taskId, String);

    if (!this.userId) {
      throw new Meteor.Error('Error updating task', 'Not authorized.');
    }

    const task = Task.findOne({ _id: taskId, userId: this.userId });
    if (!task) {
      throw new Meteor.Error('Error updating task', 'Access denied.');
    }
    task.toggleDone();
  },
});
