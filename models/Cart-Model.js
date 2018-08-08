const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let cartSchema = new Schema({
    custId : {
        type: String,
        required : true
    },
    prodId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default:1,
        min: 1,
        max: 5
    }
})

//Indexing:
//To speed up query results and also for sorting
//A value of 1 specifies an index that orders items in ascending order
//A value of -1 specifies an index that orders items in descending order
//Refer: https://docs.mongodb.com/manual/core/index-compound/#compound-indexes
//sparse indexe: https://docs.mongodb.com/manual/core/index-sparse/
cartSchema.index({custId : 1, prodId: 1}, { unique : true, sparse : true })
mongoose.model('Cart', cartSchema)