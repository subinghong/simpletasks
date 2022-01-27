import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

export const Task = Class.create({
  name: 'Task',
  collection: Tasks,
  fields: {
    description: String,
    userId: String,
    done: {
      type: Boolean,
      default: false,
    },
  },
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt',
    },
  },
  meteorMethods: {
    toggleDone() {
      this.done = !this.done;
      return this.save();
    },
  },
});
