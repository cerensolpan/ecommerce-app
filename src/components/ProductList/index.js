import "./style.scss";

import Icon from "../Icon";
import ProductCard from "../ProductCard/index";

const ProductList = ({ filteredProducts }) => {
  return (
    <section className="filtersection">
      <div className="filter-title">
        <Icon iconName="leaf" />
        <h2 className="filter-category">Tüm Kategoriler</h2>
      </div>
      {filteredProducts?.length > 0 ? (
        <div className="product-list-wrapper">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="product-list-notfound">
          Ürün bulunamadı.
        </div>
      )}
    </section>
  );
};

export default ProductList;
