const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      products: 
      [
        {
          product_id: mongoose.Schema.Types.ObjectId,
          quantity: Number,

        }
      ],
    price: {
        type: Number,
        required: "Order can't exist with no price"
      },
    status: {//TODO
        type: String,
        enum: ['Pending', 'Being Shipped', 'Completed', 'Canceled'],
        default : "Pending"
      },

}, {
    timestamps: true
})






module.exports = mongoose.model('order',orderSchema)