const express = require('express')
const productsController = require('../controllers/productsController')
const appConfig = require("../config/appConfig")
const auth = require('../middlewares/auth')

//passing the application instance as param
let setRouter = (app) => {
	let baseUrl = appConfig.apiVersion + '/products';

    /* command to generate apidoc folder which will eventually be used to create actual website like doc
    apidoc -i routes/ -o apidoc/  */
	app.get(baseUrl + '/all', auth.isAuthenticated, productsController.getAllProducts);

    /**
	 * @api {get} /api/v1/products/all Get all products
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All product Details Found",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						prodCategory: "string",
						prodName: "string",						
						prodManufacturer: "string",
						prodDesc: "string",
						prodReviews: object(type = array),
						prodRating: "Number",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find product Details",
	    "status": 500,
	    "data": null
	   }
	 */


app.get(baseUrl + '/view/:prodId', auth.isAuthenticated, productsController.viewByProductId);
/**
 * @api {get} /api/v1/products/view/:prodId Get a single product by product ID
 * @apiVersion 0.0.1
 * @apiGroup Read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} prodId The product's ID should be passed as the URL parameter
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
	"error": false,
	"message": "product Found Successfully.",
	"status": 200,
	"data": {
				_id: "string",
				__v: number,
				prodId: "string",
				prodCategory: "string",
				prodName: "string",						
				prodManufacturer: "string",
				prodDesc: "string",
				prodReviews: object(type = array),
				prodRating: "Number",
				created: "date",
				lastModified: "date"
			}
		}
	}
}
  @apiErrorExample {json} Error-Response:
 *
 * {
	"error": true,
	"message": "Error Occured.",
	"status": 500,
	"data": null
   }
 */

	app.get(baseUrl + '/view/by/prodCategory/:prodCategory', auth.isAuthenticated, productsController.viewByProductCategory);
    /**
	 * @api {get} /api/v1/products/view/by/prodCategory/:prodCategory Get products by prodCategory
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodCategory Category of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "products Found Successfully.",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						prodCategory: "string",
						prodName: "string",						
						prodManufacturer: "string",
						prodDesc: "string",
						prodReviews: object(type = array),
						prodRating: "Number",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.post(baseUrl + '/delete/:prodId', auth.isAuthenticated, productsController.deleteProduct);
    /**
	 * @api {post} /api/v1/products/:prodId/delete Delete product by prodId
	 * @apiVersion 0.0.1
	 * @apiGroup Delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId ID of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "product Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.put(baseUrl + '/edit/:prodId', auth.isAuthenticated, productsController.editProduct);
    /**
	 * @api {put} /api/v1/products/:prodId/edit Edit/Update product by prodId
	 * @apiVersion 0.0.1
	 * @apiGroup Update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId ID of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "product Edited Successfully.",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						prodCategory: "string",
						prodName: "string",						
						prodManufacturer: "string",
						prodDesc: "string",
						prodReviews: object(type = array),
						prodRating: "Number",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.post(baseUrl + '/create', auth.isAuthenticated, productsController.createProduct);
    /**
	 * @api {post} /api/v1/products/create Create product
	 * @apiVersion 0.0.1
	 * @apiGroup Create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} prodId Unique Product ID of the product passed as a body parameter
	 * @apiParam {String} prodCategory Category of the product passed as a body parameter
	 * @apiParam {String} prodName Name of the product passed as a body parameter
	 * @apiParam {String} prodDesc Description of the product passed as a body parameter
	 * @apiParam {String} prodManufacturer Manufacturer of the product passed as a body parameter
	 * @apiParam {String} prodReviews Reviews of the product passed as a body parameter
	 * @apiParam {String} prodRating Rating of the product passed as a body parameter
	 
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product created successfully",
	    "status": 200,
	    "data": [
					{
						prodId: "string",
						prodCategory: "string",
						prodName: "string",						
						prodManufacturer: "string",
						prodDesc: "string",
						prodReviews: object(type = array),
						prodRating: "Number",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

}

//export the routes
module.exports = {
	setRouter: setRouter
}