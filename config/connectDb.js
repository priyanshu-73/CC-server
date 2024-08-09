import mongoose from 'mongoose'

const connectDb = async (mongoUri) => {
    await mongoose.connect(mongoUri).then(() => {console.log('Connected to db')});
}

export default connectDb;