// import { model, models, Schema } from "mongoose";

// Define the Species enum with string values
// const speciesEnum = {
//   values: ["cat", "dog"],
//   message: '{VALUE} is not a valid species'
// };

// Define the Gender enum with string values
// const genderEnum = {
//   values: ["male", "female"],
//   message: '{VALUE} is not a valid gender'
// };

// const AnimalSchema = new Schema({
//   name: { type: String, required: true },
//   species: { type: String, enum: speciesEnum, required: true },
//   breed: { type: String, required: true },
//   availability: { type: Boolean, required: true },
//   description: { type: String, required: true },
//   gender: { type: String, enum: genderEnum, required: true },
//   owner: { type: Schema.Types.ObjectId, ref: "User", required: true }
// }, { timestamps: true });

// const Animal = models.Animal || model("Animal", AnimalSchema);

// export default Animal;
