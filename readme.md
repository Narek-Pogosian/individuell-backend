Documention

BASE_URL: http://localhost:5050/api

- Get all products: GET BASE_URL/products

- Get a single product: GET BASE_URL/products/:productId

- Post a new product: POST BASE_URL/products, body: {name: string, description: string, price: number, imageURL: string}

- Update a product: PUT BASE_URL/products/:productId, body: {name: string, description: string, price: number, imageURL: string}

- Delete a product: DELETE BASE_URL/products/:productId

- Register a user: POST BASE_URL/users/register, body: {name: string, email: string, password: string}

- Login: POST BASE_URL/users/login, body: {email: string, password: string}

---

Has to be logged in, send JWT token as bearer token

- Create a new Order: POST BASE_URL/orders, body: { items: [{product: productId, quantity: number}, ...]}
- Get order for user: GET BASE_URL/orders
