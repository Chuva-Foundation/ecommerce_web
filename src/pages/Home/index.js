import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import data from "../../data";

function Home() {
  return (
    <div>
      <h1>Featured Products</h1>
      <Input />
      <Button />

      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>${product.price}</p>
              <button>Add to Card</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
