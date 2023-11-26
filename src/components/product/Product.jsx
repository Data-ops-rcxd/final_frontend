/* eslint-disable react/prop-types */
import Style from "./Product.module.css";
const Product = ({
  img,
  title,
  description,
  price,
  place,
  user,
  stars,
  featured,
}) => {
  const coloredStars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`${Style.star} ${index < stars / 2 ? Style.colored : ""}`}
    >
      &#9733;
    </span>
  ));
  return (
    <>
      <div className={Style.boxstyle}>
        <div className={Style.productinfo}>
          <div className={Style.imgcont}>
            <img className={Style.img} src={img} />
            {featured && <h4 className={Style.featured}>Featured!</h4>}
          </div>
          <h2 className={Style.title}>{title}</h2>
          <div className={Style.description}>{description}</div>
          <div className={Style.buyinfo}>
            <h3 className={Style.money}>${price}</h3>
            <h3 className={Style.place}>{place}</h3>
          </div>
        </div>

        <div className={Style.userinfo}>
          <h3 className="user">{user}</h3>
          {coloredStars}
        </div>
      </div>
    </>
  );
};

export default Product;
