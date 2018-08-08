const custController = require('../controllers/custController');
const appConfig = require('./../config/appConfig')
const auth = require('../middlewares/auth')
const cartMiddleware = require('../middlewares/cartMiddleware')


let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion + '/customers'
    app.post(baseUrl + '/create',auth.isAuthenticated, custController.createCustomer)
    /**
	 * @api {post} /api/v1/customers/create Create new customer
	 * @apiVersion 0.0.1
	 * @apiGroup Create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} custFirstName First Name of the customer passed as a body parameter
     * @apiParam {String} custLastName Last Name of the customer passed as a body parameter
     * @apiParam {String} custEmailId Email-ID of the customer passed as a body parameter
     * @apiParam {String} custPassword Password of the customer account passed as a body parameter
     * @apiParam {Number} custMobileNumber Mobile Number of the customer passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "customer successfully created",
            "status": 200,
            "data": {
                "isPrime": boolean,
                "_id": String,
                "custId": String,
                "custFirstName": String,
                "custLastName": String,
                "custEmailId": String,
                "custPassword": String,
                "custMobileNumber": Number,
                "custCart": object(type = array)
                "__v": Number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured saving the customer",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl + '/all', auth.isAuthenticated, custController.getAllCustomers)
    /**
	 * @api {get} /api/v1/customers/all Get all customers list
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "customers found",
            "status": 200,
            "data": [
                    {                    
                    "custId": String,
                    "custFirstName": String,
                    "custLastName": String,
                    "custEmailId": String,
                    "custPassword": String,
                    "custMobileNumber": Number,
                    "custCart": object(type = array)                    
                }
            ]
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in getting all customer list.",
	    "status": 500,
	    "data": null
	   }
	 */
    
     
    app.put(baseUrl + '/edit/:custId', auth.isAuthenticated, custController.updateCustDetails)
    /**
	 * @api {put} /api/v1/customers/edit/:custId Update customer details
	 * @apiVersion 0.0.1
	 * @apiGroup Update 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} custId Unique Customer ID of the customer passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Customer detaisl updated!",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in updating the customer details.",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/:custId/cart/:prodId',auth.isAuthenticated,cartMiddleware.addToCartModel,  custController.addProductToCart)
    /**
	 * @api {post} /api/v1/customers/:custId/cart/:prodId Add new product to customer's cart
	 * @apiVersion 0.0.1
	 * @apiGroup Create 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} custId Customer ID of the customer passed as a route parameter
     * @apiParam {String} prodId Product ID of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Product successfully added to cart",
            "status": 200,
            "data": {
                "_id": String,
                "custId": String,
                "custFirstName": String,
                "custLastName": String,
                "custEmailId": String,
                "custPassword": String,
                "custMobileNumber": Number,
                "custCart": [
                    {
                        "quantity": 1,
                        "prodId": String
                    }
                ],
                "__v": Number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in adding to cart",
	    "status": 500,
	    "data": null
	   }
	 */
    app.put(baseUrl + '/:custId/increaseQty/:prodId', auth.isAuthenticated, cartMiddleware.increaseQtyCartModel, custController.increaseQty)
    /**
	 * @api {put} /api/v1/customers/:custId/increaseQty/:prodId Increase product quantity in customer's cart by 1
	 * @apiVersion 0.0.1
	 * @apiGroup Update 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} custId Customer ID of the customer passed as a route parameter
     * @apiParam {String} prodId Product ID of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Quantity successfully increased!",
            "status": 200,
            "data": {
                "_id": String,
                "custId": String,
                "custFirstName": String,
                "custLastName": String,
                "custEmailId": String,
                "custPassword": String,
                "custMobileNumber": Number,
                "custCart": [
                    {
                        "quantity": Number,
                        "prodId": String
                    }
                ],
                "__v": Number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in increasing quantity",
	    "status": 500,
	    "data": null
	   }
	 */
    app.put(baseUrl + '/:custId/decreaseQty/:prodId', auth.isAuthenticated, cartMiddleware.decreaseQtyCartModel,custController.decreaseQty)
    /**
	 * @api {put} /api/v1/customers/:custId/decreaseQty/:prodId Decreasing product quantity in customer's cart by 1
	 * @apiVersion 0.0.1
	 * @apiGroup Update 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} custId Customer ID of the customer passed as a route parameter
     * @apiParam {String} prodId Product ID of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Quantity successfully decreased",
            "status": 200,
            "data": {
                "_id": String,
                "custId": String,
                "custFirstName": String,
                "custLastName": String,
                "custEmailId": String,
                "custPassword": String,
                "custMobileNumber": Number,
                "custCart": [
                    {
                        "quantity": Number,
                        "prodId": String
                    }
                ],
                "__v": Number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in decreasing quantity",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/:custId/deleteCart/:prodId', auth.isAuthenticated,cartMiddleware.removeFromCartModel,  custController.removeProductFromCart)
    /**
	 * @api {post} /api/v1/customers/:custId/deleteCart/:prodId Delete Product from customer's cart
	 * @apiVersion 0.0.1
	 * @apiGroup Delete 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} custId Customer ID of the customer passed as a route parameter
     * @apiParam {String} prodId Product ID of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Product removed from cart",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in removing from cart",
	    "status": 500,
	    "data": null
	   }
	 */
    
    
        app.post(baseUrl + '/delete/:custId', auth.isAuthenticated, custController.deleteCustomer)
    /**
	 * @api {post} /api/v1/customers/delete/:custId Delete customer
	 * @apiVersion 0.0.1
	 * @apiGroup Delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} custId Customer ID of the customer passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "customer successfully deleted",
            "status": 200,
            "data": {
                "n": 1,
                "ok": 1
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in deleting the customer",
	    "status": 500,
	    "data": null
	   }
	 */
}

module.exports = {
    setRouter: setRouter
}