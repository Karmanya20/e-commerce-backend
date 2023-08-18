
# E Commerce Backend

This project is a backend code for an ecommerce site. The code is written in nodeJS. Various endpoints are created in order to perform various operations. The database used in this project in MongoDB. ExpressJS is also used. 


## Set Up
The code for the project is written in NodeJS. Middlewares are used in operations of cart management and order placement. User Authorization is also used and implemented by json web token.
## API Reference

#### New user sign up

```http
  POST /api/auth/createuser
```

#### Existing User log in

```http
  POST api/auth/login
```

#### Retreive list of categories

```http
  GET api/category/category
```

#### Sell products based on category id

```http
  GET api/category/sell
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of category |


#### Listing Products based on category id

```http
  POST api/products/fetchproducts/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of category |


#### Displaying details of a product

```http
  POST api/products/details/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the product |


#### Adding a product to cart

```http
  POST api/cart/add/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the product |


#### Viewing the products in cart

```http
  GET api/cart/view
```


#### Updating a cart item quantity

```http
  PUT api/cart/update/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the cart item |


#### Removing a cart item

```http
  DEL api/cart/remove/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the cart item |


#### Placing an order

```http
  POST api/orders/place/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the cart item |


#### Displaying order history

```http
  GET api/orders/history
```


#### Displaying order details

```http
  GET api/orders/details/:id
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the order |
