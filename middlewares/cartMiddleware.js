//middleware to add and validate cart model
const express = require('express')
const mongoose = require('mongoose')
const CartModel = mongoose.model('Cart')
const response = require('../libs/responseLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')

let addToCartModel = (req, res, next) => {
	let newCart = new CartModel({
        custId : req.params.custId, 
		prodId: req.params.prodId
	})
	newCart.save((err, result) => {
		if (err) {
            logger.error(err.message, 'Cart Middleware: addToCartModel', 10)
            
			let apiResponse = response.generateResponse(true, 'Error occured while adding to cart', 500, null)
			res.send(apiResponse)
		} else {
			logger.info('Product successfully Created', 'Cart Middleware: addToCartModel', 5)
			next()
		}
	})
}

let removeFromCartModel = (req, res, next) => {
	CartModel.findOneAndRemove({'custId' : req.params.custId , 'prodId' : req.params.prodId },(err, result) => {
		if (err) {
			logger.error(err.message, 'Cart Middleware: removeFromCartModel', 10)
			let apiResponse = response.generateResponse(true, 'Error occured while removing from cart', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Product Found', 'Cart Middleware: removeFromCartModel', 5)
			let apiResponse = response.generateResponse(true, 'No Product Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Product successfully Deleted', 'Cart Middleware: removeFromCartModel', 5)
			next()
		}
	})
}

let increaseQtyCartModel = (req, res, next) => {
	CartModel.findOne({'custId' : req.params.custId , 'prodId' : req.params.prodId },(err, result) => {
		if (err) {
			logger.error(err.message, 'Cart Middleware: increaseQtyCartModel', 10)
			let apiResponse = response.generateResponse(true, 'Error occured while increasing quantity', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Product Found', 'Cart Middleware: increaseQtyCartModel', 5)
			let apiResponse = response.generateResponse(true, 'No Product Found', 404, null)
			res.send(apiResponse)
		} else {
			result.quantity +=1;
			result.save((err,result) =>{
				if (err) {
					logger.error(err.message, 'Cart Middleware: increaseQtyCartModel', 10)
					let apiResponse = response.generateResponse(true, 'Error occured while increasing quantity', 500, null)
					res.send(apiResponse)
				} else if (check.isEmpty(result)) {
					logger.info('No Product Found', 'Cart Middleware: increaseQtyCartModel', 5)
					let apiResponse = response.generateResponse(true, 'No Product Found', 404, null)
					res.send(apiResponse)
				} else {
					logger.info('Quantity successfully increased', 'Cart Middleware: increaseQtyCartModel', 5)
					next()
				}
			})
		}
	})
}

let decreaseQtyCartModel = (req, res, next) => {
	CartModel.findOne({'custId' : req.params.custId , 'prodId' : req.params.prodId },(err, result) => {
		if (err) {
			logger.error(err.message, 'Cart Middleware: decreaseQtyCartModel', 10)
			let apiResponse = response.generateResponse(true, 'Error occured while decreasing quantity', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Product Found', 'Cart Middleware: decreaseQtyCartModel', 5)
			let apiResponse = response.generateResponse(true, 'No Product Found', 404, null)
			res.send(apiResponse)
		} else {
			result.quantity -=1;
			result.save((err,result) =>{
				if (err) {
					logger.error(err.message, 'Cart Middleware: decreaseQtyCartModel', 10)
					let apiResponse = response.generateResponse(true, 'Error occured while decreasing quantity', 500, null)
					res.send(apiResponse)
				} else if (check.isEmpty(result)) {
					logger.info('Quantity cannot be 0', 'Cart Middleware: decreaseQtyCartModel', 5)
					let apiResponse = response.generateResponse(true, 'Quantity cannot be 0', 404, null)
					res.send(apiResponse)
				} else {
					logger.info('Quantity successfully decreased', 'Cart Middleware: decreaseQtyCartModel', 5)
					next()
				}
			})
		}
	})
}

module.exports = {
    addToCartModel: addToCartModel,
	removeFromCartModel : removeFromCartModel,
	increaseQtyCartModel : increaseQtyCartModel,
	decreaseQtyCartModel : decreaseQtyCartModel
}