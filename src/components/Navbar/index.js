import "./style.scss";
import { useState, useEffect } from "react";
import Button from "../Ui/Button";
import Icon from "../Icon";
import SearchInput from "../Ui/SearchInput";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket);

  const [searchText, setSearchText] = useState("");
  const [percentage, setPercentage] = useState(0);

  const searchProduct = (e) => {
    setSearchText(e.target.value);
  };
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      changeNavigate();
    }
  };

  const changeNavigate = () => {
    if (searchText.length >= 3) {
      navigate({
        pathname: "/",
        search: `?search=${searchText}`,
      });
    }
  };

  useEffect(() => {
    const percentageBasket = (basket.totalPrice / 500) * 100;
    setPercentage(percentageBasket);
  }, [basket]);

  return (
    <>
      <div className="container">
        <div className="navbar">
          <a href="/">
            <Icon iconName="logo" />
          </a>
          <div className="navbar-search">
            <SearchInput
              icon
              placeholder="Ürün ara..."
              onChange={searchProduct}
              onClick={changeNavigate}
              onKeyDown={pressEnter}
            />
          </div>
          <div className="header-basket-wrapper">
            <Button text="Sepetim" icon="basket" />
            <span className="header-basket-basketQuantity">
              {basket.totalQuantity}
            </span>
            {basket.totalQuantity > 0 && (
              <div className="header-basket-shipping">
                <div className="header-basket-shipping-desc">
                  <Icon
                    iconName="attention"
                    className="header-basket-shipping-icon"
                  />
                  {basket.totalPrice - 500 < 0 ? (
                    <span>
                      <span className="basket-text">
                        {Math.ceil(500 - basket.totalPrice)} TL
                      </span>{" "}
                      ürün daha ekleyin kargo bedava
                    </span>
                  ) : (
                    <span>Kargonuz bedava</span>
                  )}
                </div>
                <div
                  className="header-basket-shipping-bar"
                  style={{ "--bar-width": `${percentage}%` }}
                ></div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`navbar-responsive-search ${
            basket.totalQuantity > 0 && `-cart-responsive-active`
          }`}
        >
          <SearchInput
            icon
            placeholder="Ürün ara..."
            onChange={searchProduct}
            onClick={changeNavigate}
            onKeyDown={pressEnter}
          />
        </div>
      </div>
      <div className="header">
        <h1 className="container">ÇiçekSepeti</h1>
      </div>
    </>
  );
}
