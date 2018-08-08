const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CartSchema = mongoose.model('Cart')
// const custCollection = mongoose.Collection;

let customerSchema = new Schema({
    custId: {
        type: String,
        unique: true
    },
    custFirstName: {
        type: String,
        required: true
    },
    custLastName: {
        type: String,
        required: true
    },
    custMobileNumber: {
        type: Number,
        min: 7000000000,
        max: 9999999999,
        required : true
    },
    custEmailId: {
        type: String,
        lowercase: true,
        required: true
    },
    custPassword: {
        type: String,
        required: true
    },
    /**
     * Sub Documents: http://mongoosejs.com/docs/subdocs.html
     * nested schemas in other schemas
     */
    custCart: [CartSchema.schema]
})

// mongoose.model('Customer', customerSchema, 'custCollection')
mongoose.model('Customer', customerSchema)