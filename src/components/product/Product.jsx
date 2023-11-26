import Style from "./Product.module.css";
// eslint-disable-next-line react/prop-types
const Product = ({ img, title, description, price, place, user, stars, featured }) => {
  return (
    <>
      <div className={Style.boxstyle}>
        <div className={Style.productinfo}>
          <div className={Style.imgcont}>
          <img className={Style.img} src={img} />
          {featured && (
          <h4 className={Style.featured}>Featured!</h4>)}
          </div>
          <h2 className={Style.title}>{title}</h2>
          <div className={Style.description}>{description}</div>
          <div className={Style.buyinfo}>
            <h3 className={Style.money}>${price}</h3>
            <h3 className={Style.place}>{place}</h3>
          </div>
        </div>
        
        <div className={Style.userinfo}>
          {stars}
          <h3 className="user">{user}</h3>
        </div>
      </div>
    </>
  );
};

export default Product;
