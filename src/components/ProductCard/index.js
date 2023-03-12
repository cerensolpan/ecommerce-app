import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from '../Icon';
import { addToBasket, removeToBasket } from '../../store/basket';

const ProductCard = ({ product }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const addProduct = ({ product }) => {
    setIsButtonActive(!isButtonActive);

    if (product?.stock > 0) {
      setQuantity(quantity + 1);
      dispatch(addToBasket({ ...product, quantity: 1 }));
    }
  };

  const addQuantityProduct = ({ type, product }) => {
    if (type === 'increment' && quantity < product?.stock) {
      setQuantity(quantity + 1);

      dispatch(addToBasket({ ...product, quantity: 1 }));
    }

    if (type === 'decrement' && quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(removeToBasket({ ...product, quantity: 1 }));
    }
  };

  useEffect(() => {
    if (quantity === 0) {
      setIsButtonActive(false);
    }
  }, [quantity]);

  return (
    <>
      {product.stock > 0 && (
        <div className="product-item">
          <img
            className="product-item-img"

            src={require(`../../assets/images/${product?.image}`)}
            alt={product?.title}
            width="100%"
          />
          <h4 className="product-item-title">{product?.title}</h4>
          <p
            className={`product-item-cargo ${
              !product?.freeShipping && 'product-item-cargo--invisible'
            }`}
          >
            Ücretsiz Teslimat
          </p>

          <p className="product-item-price">
            <span>{product?.price}</span>
            <span>{product?.currency}</span>
          </p>

          {isButtonActive ? (
            <div className="product-item-btn-quantity">
              <button
                onClick={() =>
                   addQuantityProduct({ type: 'decrement', product })
                }
              >
                <Icon iconName="minus" />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() =>
                  addQuantityProduct({ type: 'increment', product })
                }
              >
                <Icon iconName="plus" />
              </button>
            </div>
          ) : (
            <button
              className="product-item-btn"
              onClick={() => addProduct({ product })}
            >
              <span>Sepete Ekle</span>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ProductCard;
