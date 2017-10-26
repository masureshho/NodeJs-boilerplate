import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date
}, { versionKey: false });

userSchema.pre('update', () => {
  this.update({}, { $set: { updatedAt: new Date() } });
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;

export function addUser(user) {
  var newUser = new UserModel(user);
  return newUser.save();
}

export function getUserById(id) {
  return UserModel.findById(id);
}