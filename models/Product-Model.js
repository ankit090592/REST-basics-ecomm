const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const prodCollection = mongoose.Collection;
//Defining schema/structure for our blog
let productSchema = new Schema( //extending mongoose.Schema class from above
    {
        prodId: {
            type: String,
            unique: true
        },
        prodCategory: {
            type: String,   
            default: ''
        },
        prodName: {
            type: String,
            default: '' //could be any default string also
        },
        prodManufacturer: {
            type: String,
            default: ''
        },
        prodDesc: {
            type: String,
            default: ''
        },
        
        prodReviews: [],

        prodRating: {
            type: Number,
            default: 0
        },
        created: {
            type: Date,
            default: Date.now
        },
        lastModified: {
            type: Date,
            default: Date.now
        },
    }
)


//module.exports not used as it is done by the statement below
//Collection name prodCollection - to differentiate data/documents/records of this collection 
//from other collections
// mongoose.model('Product', productSchema, 'prodCollection')
mongoose.model('Product', productSchema)