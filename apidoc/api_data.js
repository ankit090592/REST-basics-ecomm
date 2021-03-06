define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/customers/create",
    "title": "Create new customer",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custFirstName",
            "description": "<p>First Name of the customer passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custLastName",
            "description": "<p>Last Name of the customer passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custEmailId",
            "description": "<p>Email-ID of the customer passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custPassword",
            "description": "<p>Password of the customer account passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "custMobileNumber",
            "description": "<p>Mobile Number of the customer passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"customer successfully created\",\n            \"status\": 200,\n            \"data\": {\n                \"isPrime\": boolean,\n                \"_id\": String,\n                \"custId\": String,\n                \"custFirstName\": String,\n                \"custLastName\": String,\n                \"custEmailId\": String,\n                \"custPassword\": String,\n                \"custMobileNumber\": Number,\n                \"custCart\": object(type = array)\n                \"__v\": Number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured saving the customer\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/custRouter.js",
    "groupTitle": "Create",
    "name": "PostApiV1CustomersCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/customers/:custId/cart/:prodId",
    "title": "Add new product to customer's cart",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custId",
            "description": "<p>Customer ID of the customer passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>Product ID of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Product successfully added to cart\",\n            \"status\": 200,\n            \"data\": {\n                \"_id\": String,\n                \"custId\": String,\n                \"custFirstName\": String,\n                \"custLastName\": String,\n                \"custEmailId\": String,\n                \"custPassword\": String,\n                \"custMobileNumber\": Number,\n                \"custCart\": [\n                    {\n                        \"quantity\": 1,\n                        \"prodId\": String\n                    }\n                ],\n                \"__v\": Number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in adding to cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/custRouter.js",
    "groupTitle": "Create",
    "name": "PostApiV1CustomersCustidCartProdid"
  },
  {
    "type": "post",
    "url": "/api/v1/products/create",
    "title": "Create product",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>Unique Product ID of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodCategory",
            "description": "<p>Category of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodName",
            "description": "<p>Name of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodDesc",
            "description": "<p>Description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodManufacturer",
            "description": "<p>Manufacturer of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodReviews",
            "description": "<p>Reviews of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodRating",
            "description": "<p>Rating of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\tprodCategory: \"string\",\n\t\t\t\t\t\tprodName: \"string\",\t\t\t\t\t\t\n\t\t\t\t\t\tprodManufacturer: \"string\",\n\t\t\t\t\t\tprodDesc: \"string\",\n\t\t\t\t\t\tprodReviews: object(type = array),\n\t\t\t\t\t\tprodRating: \"Number\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "Create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/customers/:custId/deleteCart/:prodId",
    "title": "Delete Product from customer's cart",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custId",
            "description": "<p>Customer ID of the customer passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>Product ID of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Product removed from cart\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in removing from cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/custRouter.js",
    "groupTitle": "Delete",
    "name": "PostApiV1CustomersCustidDeletecartProdid"
  },
  {
    "type": "post",
    "url": "/api/v1/customers/delete/:custId",
    "title": "Delete customer",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custId",
            "description": "<p>Customer ID of the customer passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"customer successfully deleted\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"ok\": 1\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in deleting the customer\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/custRouter.js",
    "groupTitle": "Delete",
    "name": "PostApiV1CustomersDeleteCustid"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:prodId/delete",
    "title": "Delete product by prodId",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>ID of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "Delete",
    "name": "PostApiV1ProductsProdidDelete"
  },
  {
    "type": "get",
    "url": "/api/v1/customers/all",
    "title": "Get all customers list",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"customers found\",\n            \"status\": 200,\n            \"data\": [\n                    {                    \n                    \"custId\": String,\n                    \"custFirstName\": String,\n                    \"custLastName\": String,\n                    \"custEmailId\": String,\n                    \"custPassword\": String,\n                    \"custMobileNumber\": Number,\n                    \"custCart\": object(type = array)                    \n                }\n            ]\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in getting all customer list.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/custRouter.js",
    "groupTitle": "Read",
    "name": "GetApiV1CustomersAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All product Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\tprodCategory: \"string\",\n\t\t\t\t\t\tprodName: \"string\",\t\t\t\t\t\t\n\t\t\t\t\t\tprodManufacturer: \"string\",\n\t\t\t\t\t\tprodDesc: \"string\",\n\t\t\t\t\t\tprodReviews: object(type = array),\n\t\t\t\t\t\tprodRating: \"Number\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/by/prodCategory/:prodCategory",
    "title": "Get products by prodCategory",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodCategory",
            "description": "<p>Category of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\tprodCategory: \"string\",\n\t\t\t\t\t\tprodName: \"string\",\t\t\t\t\t\t\n\t\t\t\t\t\tprodManufacturer: \"string\",\n\t\t\t\t\t\tprodDesc: \"string\",\n\t\t\t\t\t\tprodReviews: object(type = array),\n\t\t\t\t\t\tprodRating: \"Number\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsViewByProdcategoryProdcategory"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/:prodId",
    "title": "Get a single product by product ID",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>The product's ID should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\"error\": false,\n\t\"message\": \"product Found Successfully.\",\n\t\"status\": 200,\n\t\"data\": {\n\t\t\t\t_id: \"string\",\n\t\t\t\t__v: number,\n\t\t\t\tprodId: \"string\",\n\t\t\t\tprodCategory: \"string\",\n\t\t\t\tprodName: \"string\",\t\t\t\t\t\t\n\t\t\t\tprodManufacturer: \"string\",\n\t\t\t\tprodDesc: \"string\",\n\t\t\t\tprodReviews: object(type = array),\n\t\t\t\tprodRating: \"Number\",\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\"error\": true,\n\t\"message\": \"Error Occured.\",\n\t\"status\": 500,\n\t\"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsViewProdid"
  },
  {
    "type": "put",
    "url": "/api/v1/customers/:custId/decreaseQty/:prodId",
    "title": "Decreasing product quantity in customer's cart by 1",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custId",
            "description": "<p>Customer ID of the customer passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>Product ID of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Quantity successfully decreased\",\n            \"status\": 200,\n            \"data\": {\n                \"_id\": String,\n                \"custId\": String,\n                \"custFirstName\": String,\n                \"custLastName\": String,\n                \"custEmailId\": String,\n                \"custPassword\": String,\n                \"custMobileNumber\": Number,\n                \"custCart\": [\n                    {\n                        \"quantity\": Number,\n                        \"prodId\": String\n                    }\n                ],\n                \"__v\": Number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in decreasing quantity\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/custRouter.js",
    "groupTitle": "Update",
    "name": "PutApiV1CustomersCustidDecreaseqtyProdid"
  },
  {
    "type": "put",
    "url": "/api/v1/customers/:custId/increaseQty/:prodId",
    "title": "Increase product quantity in customer's cart by 1",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custId",
            "description": "<p>Customer ID of the customer passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>Product ID of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Quantity successfully increased!\",\n            \"status\": 200,\n            \"data\": {\n                \"_id\": String,\n                \"custId\": String,\n                \"custFirstName\": String,\n                \"custLastName\": String,\n                \"custEmailId\": String,\n                \"custPassword\": String,\n                \"custMobileNumber\": Number,\n                \"custCart\": [\n                    {\n                        \"quantity\": Number,\n                        \"prodId\": String\n                    }\n                ],\n                \"__v\": Number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in increasing quantity\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/custRouter.js",
    "groupTitle": "Update",
    "name": "PutApiV1CustomersCustidIncreaseqtyProdid"
  },
  {
    "type": "put",
    "url": "/api/v1/customers/edit/:custId",
    "title": "Update customer details",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "custId",
            "description": "<p>Unique Customer ID of the customer passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Customer detaisl updated!\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in updating the customer details.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/custRouter.js",
    "groupTitle": "Update",
    "name": "PutApiV1CustomersEditCustid"
  },
  {
    "type": "put",
    "url": "/api/v1/products/:prodId/edit",
    "title": "Edit/Update product by prodId",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>ID of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tprodId: \"string\",\n\t\t\t\t\t\tprodCategory: \"string\",\n\t\t\t\t\t\tprodName: \"string\",\t\t\t\t\t\t\n\t\t\t\t\t\tprodManufacturer: \"string\",\n\t\t\t\t\t\tprodDesc: \"string\",\n\t\t\t\t\t\tprodReviews: object(type = array),\n\t\t\t\t\t\tprodRating: \"Number\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "Update",
    "name": "PutApiV1ProductsProdidEdit"
  }
] });
