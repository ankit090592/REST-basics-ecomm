const express = require('express')
const mongoose = require('mongoose')
const customerModel = mongoose.model('Customer')
const CartModel = mongoose.model('Cart')
const shortid = require('shortid')
const response = require('../libs/responseLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')



// function to fetch all the Customers
let getAllCustomers = (req, res) => {
	customerModel.find()
		.select('-_id -__v')
		.lean()
		.exec((err, result) => {
			if (err) {
				logger.error(err.message, 'Customer Controller: getAllCustomers', 10)
				let apiResponse = response.generateResponse(true, 'Error occured while getting all the Customers', 500, null)
				res.send(apiResponse)
			} else if (check.isEmpty(result)) {
				logger.info('No Customers Found', 'Customer Controller: getAllCustomers', 5)
				let apiResponse = response.generateResponse(true, 'No Customers Found', 404, null)
				res.send(apiResponse)
			} else {
				logger.info('Customers Found', 'Customer Controller: getAllCustomers', 5)
				let apiResponse = response.generateResponse(false, 'Customers Found', 200, result)
				res.send(apiResponse)
			}
		})
}

// function to create Customer credentials
let createCustomer = (req, res) => {
	let custId = shortid.generate();
	let newCustomer = new customerModel({
		custId: custId,
		custFirstName: req.body.custFirstName,
        custLastName: req.body.custLastName,
        custMobileNumber: req.body.custMobileNumber,
		custEmailId: req.body.custEmailId,
		custPassword: req.body.custPassword
	})
	newCustomer.save((err, result) => {
		if (err) {
			logger.error(err.message, 'Customer Controller: createCustomer', 10)
			let apiResponse = response.generateResponse(true, 'Error occured saving the Customer', 500, null)
			res.send(apiResponse)
		} else {
			logger.info('Customer successfully Created', 'Customer Controller: createCustomer', 5)
			let apiResponse = response.generateResponse(false, 'Customer successfully created', 200, result)
			res.send(apiResponse)
		}
	})
}


/**
 * db.collection.update(query, update, options)
Modifies an existing document or documents in a collection. 
The method can modify specific fields of an existing document or documents or replace an existing document entirely, depending on the update parameter.
By default, the update() method updates a single document. 
Set the Multi Parameter to update all documents that match the query criteria.
 */
// function to update credentials of the Customers
let updateCustDetails = (req, res) => {
	let options = req.body;
	customerModel.update({ 'custId': req.params.custId }, options, { multi: true }, (err, result) => {
		if (err) {
			logger.error(err.message, 'Customer Controller: updateCustDetails', 10)
			let apiResponse = response.generateResponse(true, 'Error occured while updating the Credentials', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Customer Found', 'Customer Controller: updateCustDetails', 5)
			let apiResponse = response.generateResponse(true, 'No Customer Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Customer successfully Edited', 'Customer Controller: updateCustDetails', 5)
			let apiResponse = response.generateResponse(false, 'Customer successfully updated', 200, result)
			res.send(apiResponse)
		}
	})
}

// function to delete the existing Customer
let deleteCustomer = (req, res) => {
	customerModel.remove({ 'custId': req.params.custId }, (err, result) => {
		if (err) {
			logger.error(err.message, 'Customer Controller: deleteCustomer', 10)
			let apiResponse = response.generateResponse(true, 'Error occured while deleting the Customer', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Customer Found', 'Customer Controller: deleteCustomer', 5)
			let apiResponse = response.generateResponse(true, 'No Customer Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Customer successfully Deleted', 'Customer Controller: deleteCustomer', 5)
			let apiResponse = response.generateResponse(false, 'Customer successfully deleted', 200, result)
			res.send(apiResponse)
		}
	})
}


/*db.collection.findOneAndUpdate(filter, update, options): Updates a single document based on the filter and sort criteria.
// updates the first matching document in the collection that matches the filter. 
//The sort parameter can be used to influence which document is updated.    
Add a product to customer's cart*/
let addProductToCart = (req, res) => {
	let newCart = new CartModel({
		custId : req.params.custId,
		prodId: req.params.prodId
	})
	customerModel.findOneAndUpdate({ 'custId': req.params.custId }, { $push: { custCart: newCart } }, { new: true }, (err, result) => {
		if (err) {
			logger.error(err.message, 'Customer Controller: addProductToCart', 10)
			let apiResponse = response.generateResponse(true, 'Error occured while adding to cart', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Customer Found', 'Customer Controller: addProductToCart', 5)
			let apiResponse = response.generateResponse(true, 'No Customer Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Customer Found', 'Customer Controller: addProductToCart', 5)
			let apiResponse = response.generateResponse(false, 'Product successfully added to cart', 200, result)
			res.send(apiResponse)
		}
	})
}

// function to increase quantity of the existing product added in the cart
//new:true to return updated document
let increaseQty = (req, res) => {
	customerModel.findOneAndUpdate({ 'custId': req.params.custId, 'custCart.prodId': req.params.prodId }, { $inc: { 'custCart.$.quantity': 1 } }, { new: true }, (err, result) => {
		if (err) {
			logger.error(err.message, 'Customer Controller: increaseQty', 10)
			let apiResponse = response.generateResponse(true, 'Error occured while increasing quantity', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Customer or Product Found', 'Customer Controller: increaseQty', 5)
			let apiResponse = response.generateResponse(true, 'No Customer or Product Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Customer Found', 'Customer Controller: increaseQty', 5)
			let apiResponse = response.generateResponse(false, 'Quantity successfully increased', 200, result)
			res.send(apiResponse)
		}
	})
}
//function to decrease quantity of the existing producct added in the cart
let decreaseQty = (req, res) => {
	customerModel.findOneAndUpdate({ 'custId': req.params.custId, 'custCart.prodId': req.params.prodId }, { $inc: { 'custCart.$.quantity': -1 } }, { new: true }, (err, result) => {
		if (err) {
			logger.error(err.message, 'Customer Controller: decreaseQty', 10)
			let apiResponse = response.generateResponse(true, 'Error occured while decreasing the quantity', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Customer or Product Found', 'Customer Controller: decreaseQty', 5)
			let apiResponse = response.generateResponse(true, 'No Customer or Product Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Customer Found', 'Customer Controller: decreaseQty', 5)
			let apiResponse = response.generateResponse(false, 'Quantity successfully decreased', 200, result)
			res.send(apiResponse)
		}
	})
}

// function to remove existing product from the cart
let removeProductFromCart = (req, res) => {
	customerModel.update({ 'custId': req.params.custId }, { $pull: { 'custCart': { 'prodId': req.params.prodId } } }, (err, result) => {
		if (err) {
			logger.error(err.message, 'Customer Controller: removeProductFromCart', 10)
			let apiResponse = response.generateResponse(true, 'Error occured while removing from cart', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Cart Found', 'Customer Controller: removeProductFromCart', 5)
			let apiResponse = response.generateResponse(true, 'No Customer Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Cart Found', 'Customer Controller: removeProductFromCart', 5)
			let apiResponse = response.generateResponse(false, 'Product successfully removed from cart', 200, result)
			res.send(apiResponse)
		}
	})
}



module.exports = {
	createCustomer: createCustomer,
	getAllCustomers: getAllCustomers,
    updateCustDetails: updateCustDetails,
    deleteCustomer: deleteCustomer,
	addProductToCart: addProductToCart,
	removeProductFromCart: removeProductFromCart,	
	increaseQty: increaseQty,
	decreaseQty: decreaseQty,
	
}