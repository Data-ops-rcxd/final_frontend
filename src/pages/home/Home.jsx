/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Product from "../../components/Product";
import minidb from "../../assets/miniDB.json";

import Style from "./Home.module.css";

const Home = () => {
  const productsPerPage = 10;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [adminstatus, setAdmin] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    img: "",
    description: "",
    place: "",
    user: "",
    stars: 0,
    price: 0,
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  let [db, setDb] = useState(JSON.parse(JSON.stringify(minidb)));

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = db
      .slice(startIndex, endIndex)
      .map(
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
        }) => (
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
        )
      );
    setProducts(paginatedProducts);
  }, [currentPage, db]);

  const changeadmin = () => {
    setAdmin(!adminstatus);
  };

  const handleNewProductChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectedProductChange = (e) => {
    setSelectedProduct({
      ...selectedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.description || !newProduct.price) {
      alert("Please fill in all required fields.");
      return;
    }

    const newItem = {
      index: db.length, // Assign a unique index to the new item
      title: newProduct.title,
      img: newProduct.img,
      description: newProduct.description,
      price: newProduct.price,
      place: newProduct.place,
      user: newProduct.user,
      stars: newProduct.stars,
      featured: false,
    };

    const updatedDB = [...db, newItem];
    setDb(updatedDB);

    setNewProduct({
      title: "",
      img: "",
      description: "",
      place: "",
      user: "",
      stars: 0,
      price: 0,
    });
  };

  const handleEditProduct = () => {
    // Find the index of the selected product in db
    const productIndex = db.findIndex(
      (product) => product.index === selectedProduct.index
    );

    if (productIndex !== -1) {
      // Replace the product with the modified selectedProduct
      db[productIndex] = { ...selectedProduct };

      // Trigger re-render by updating currentPage
      setCurrentPage((prev) => prev + 1);
    }

    // Clear the selectedProduct state
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (index) => {
    // Filter out the product with the given index
    db = db.filter((product) => product.index !== index);

    // Trigger re-render by updating currentPage
    setCurrentPage((prev) => prev + 1);
  };

  const totalPages = Math.ceil(db.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={Style.fullbody}>
      <header>
        <div className={Style.headercontainer}>
          <div className="title">
            <span style={{ color: "lightgreen" }}>Go</span>Explore
          </div>
        </div>
      </header>
      <main className={Style.maincont}>
        <div className={Style.pagination}>
          <span className={Style.pag} onClick={handlePreviousPage}>&#9665; Previous</span>
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`${Style.pag} ${currentPage === index + 1 ? Style.active : Style.hide}`}
            >
              {index + 1}
            </span>
          ))}
          <span className={Style.pag} onClick={handleNextPage}>Next &#9655;</span>
        </div>
        <div className={Style.listcontainer}>{products}</div>
        {!adminstatus && (
            <button onClick={changeadmin}>Click to edit mode</button>
          )}
          {adminstatus && (
            <button onClick={changeadmin}>Click to exit edit mode</button>
          )}
        {adminstatus && (
          <div className="editcont">
            <div className="manage">
              <div>
                <h2>Admin Panel</h2>

                <div>
                  <h2>Product Management</h2>
                  <div>
                    <label>Title:</label>
                    <input
                      type="text"
                      name="title"
                      value={newProduct.title}
                      onChange={handleNewProductChange}
                    />
                  </div>
                  <div>
                    <label>img:</label>
                    <input
                      type="text"
                      name="img"
                      value={newProduct.img}
                      onChange={handleNewProductChange}
                    />
                  </div>
                  <div>
                    <label>Description:</label>
                    <textarea
                      name="description"
                      value={newProduct.description}
                      onChange={handleNewProductChange}
                    />
                  </div>
                  <div>
                    <label>Place:</label>
                    <input
                      type="text"
                      name="place"
                      value={newProduct.place}
                      onChange={handleNewProductChange}
                    />
                  </div>
                  <div>
                    <label>Price:</label>
                    <input
                      type="number"
                      name="price"
                      value={newProduct.price}
                      onChange={handleNewProductChange}
                    />
                  </div>
                  <div>
                    <label>Stars:</label>
                    <input
                      type="number"
                      name="stars"
                      value={newProduct.stars}
                      onChange={handleNewProductChange}
                    />
                  </div>
                  <div>
                    <label>User:</label>
                    <input
                      type="text"
                      name="user"
                      value={newProduct.name}
                      onChange={handleNewProductChange}
                    />
                  </div>
                  <button onClick={handleAddProduct}>Add Product</button>
                </div>
              </div>
            </div>

            <div className="edit">
              <div>
                <h2>Product Editing</h2>
                <select
                  onChange={(e) =>
                    setSelectedProduct(JSON.parse(e.target.value))
                  }
                  defaultValue={""}
                >
                  <option value="" disabled={true}>
                    Select a product
                  </option>
                  {db.map((product) => (
                    <option key={product.index} value={JSON.stringify(product)}>
                      {product.title}
                    </option>
                  ))}
                </select>

                {selectedProduct && (
                  <div>
                    <div>
                      <label>Title:</label>
                      <input
                        type="text"
                        name="title"
                        value={selectedProduct.title}
                        onChange={handleSelectedProductChange}
                      />
                    </div>
                    <div>
                      <label>Description:</label>
                      <textarea
                        name="description"
                        value={selectedProduct.description}
                        onChange={handleSelectedProductChange}
                      />
                    </div>
                    <div>
                      <label>Price:</label>
                      <input
                        type="number"
                        name="price"
                        value={selectedProduct.price}
                        onChange={handleSelectedProductChange}
                      />
                    </div>
                    <button onClick={handleEditProduct}>Edit Product</button>
                    <button onClick={handleDeleteProduct}>
                      Delete Product
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className={Style.footer}>
        Create by: Daniel Diaz & David Tache
      </footer>
    </div>
  );
};

export default Home;
