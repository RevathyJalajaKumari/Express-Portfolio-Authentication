import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessContactSchema = new Schema({
    contactname: String,
    contactnumber: Number,
    emailaddress: String
}, {
    timestamps: true, 
    collection: 'businesscontact'
});

export default mongoose.model("Businesscontact", BusinessContactSchema);