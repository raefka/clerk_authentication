/**
import { Schema , model ,models } from "mongoose";


 * Represents the schema for a user in the database.

const UserSchema = new Schema({
        email:{ type: "string", required: true ,unique: true},
        userName :{ type: "string", required: true , unique: true},
        password: { type: "string", required: true},   
},{timestamps: true}
); 

const User = models.User || model("User", UserSchema);

export default User; */



import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;