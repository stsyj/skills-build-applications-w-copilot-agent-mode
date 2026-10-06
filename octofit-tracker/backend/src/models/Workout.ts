import { Schema, model, models } from 'mongoose'

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    difficulty: { type: String, required: true },
    estimatedMinutes: { type: Number, required: true },
    recommendedForGoal: { type: String, required: true },
  },
  { timestamps: true },
)

export default models.Workout || model('Workout', workoutSchema)