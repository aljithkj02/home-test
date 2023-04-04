import mongoose from "mongoose";

const dataSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        place: { type: String, required: true },
        no_of_travellers: { type: Number, required: true },
        budget: { type: Number, required: true }
    },
    {
        timestamps: true
    }
)

const Data = mongoose.model('Data', dataSchema);

export default Data;