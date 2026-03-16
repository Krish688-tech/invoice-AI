import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://littlelotus04_db_user:bqmyegTGiVoice0123@cluster0.vet08d1.mongodb.net/Invoice')
    .then(() => {console.log('DB Connected')})
}