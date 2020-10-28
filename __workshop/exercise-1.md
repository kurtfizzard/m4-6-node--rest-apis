# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

`/customers` | `GET` | Access a list of customers.
`/customers` | `POST` | Add a customer.
`/customers` | `DELETE` | Delete a customer.
`/customers/:id` | `GET` | Access information about a specific customer.
`/customers/:id` | `PATCH` | Modify information about a specific customer.
`/seating` | `GET` | Access a list of seats.
`/seating` | `POST` | Add a seat.
`/seating` | `DELETE` | Delete a seat.
`/stock` | `GET` | Access a list of products.
`/stock` | `POST` | Add a product.
`/stock` | `DELETE` | Delete a product.
`/stock/:id` | `GET` | Access information about a specific product.
`/stock/:id` | `PATCH` | Modify information about a specific product.
