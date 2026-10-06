import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
  {
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    teamName: { type: String, required: true },
    fitnessGoal: { type: String, required: true },
  },
  { timestamps: true },
)

export default models.User || model('User', userSchema)