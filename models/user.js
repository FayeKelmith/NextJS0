import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email Required"],
  },
  username: {
    type: String,
    required: [true, "Username Required"],
  },
  image: {
    type: String,
  },
});

// we need to check for the existence of the model already in models before creating a new one.
//So

const User = models.User || model("User", UserSchema);

export default User;
