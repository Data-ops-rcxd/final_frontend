import Style from "./Product.module.css";
// eslint-disable-next-line react/prop-types
const Product = ({ img, title, description, price, place, user, stars, featured }) => {
  return (
    <>
      <div className={Style.boxstyle}>
        <div className="productinfo">
          <img className={Style.img} src={img} />
          <h2 className="title">{title}</h2>
          <h4 className="featured">{featured}</h4>
          <div className={Style.description}>{description}</div>
          <div className="buyinfo">
            <link rel="stylesheet" href={place} className="place" />
            <h2 className="money">${price}</h2>
          </div>
        </div>
        <div className="userinfo">
          <h2 className="user">{user}</h2>
          {stars}
        </div>
      </div>
    </>
  );
};

export default Product;
