import { Link } from "react-router-dom";
import Product from "../../components/product";
import { useEffect, useState } from "react";

import minidb from "../../assets/miniDB.json";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getproducts = () => {
      try {
        const products = minidb.map(
          ({
            index,
            img,
            title,
            description,
            price,
            place,
            user,
            stars,
            featured,
          }) => {
            return (
              <Product
                key={index}
                img={img}
                title={title}
                description={description}
                price={price}
                place={place}
                user={user}
                stars={stars}
                featured={featured}
              />
            );
          }
        );

        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getproducts();
  }, []);

  return (
    <>
      <header>
        <div className="headercontainer">
          <div className="title">GoExplore</div>
        </div>
      </header>
      <main>
        <div className="listcontainer">{products}</div>
        <Link to="shop">
          <button>Click to go to your shopping cart</button>
        </Link>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
