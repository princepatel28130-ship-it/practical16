import { useState } from "react";

function App() {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [quantity, setQuantity] = useState("");
const [products, setProducts] = useState([]);

function addProduct(e) {
e.preventDefault();


const newProduct = {
  id: Date.now(),
  name: name,
  price: price,
  quantity: quantity,
};

setProducts([...products, newProduct]);

setName("");
setPrice("");
setQuantity("");


}

return (
<div style={{ textAlign: "center", margin: "30px" }}> <h1>Product Management</h1>


  <form onSubmit={addProduct}>
    <input
      type="text"
      placeholder="Product Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
    <br /><br />

    <input
      type="number"
      placeholder="Product Price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      min="0.01"
      step="0.01"
      required
    />
    <br /><br />

    <input
      type="number"
      placeholder="Quantity"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      min="1"
      required
    />
    <br /><br />

    <button type="submit">Add Product</button>
  </form>

  <h2>Product List</h2>

  {products.length === 0 ? (
    <p>No products added yet.</p>
  ) : (
    products.map((product) => (
      <div key={product.id}>
        <p>Product: {product.name}</p>
        <p>Price: ₹{product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <hr />
      </div>
    ))
  )}
</div>


);
}

export default App;
