import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import data from "../src/products.json";
import categoryList from "../src/categories.json";
import ProductList from "./components/ProductList/index.js";
import CategorySection from "./components/CategorySection/index.js";
import Navbar from "./components/Navbar/index.js";
import { Breadcrumb } from "./components/UI/Breadcrumb/index.js";
import Campaigns from "./components/Campaigns";
import Footer from "./components/Footer";

function App() {
  const categories = [{ title: "Çiçeksepeti Market" }, { title: "İstanbul" }];

  const [filteredProducts, setFilteredProducts] = useState(data.products);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("search");
  const [activeCategory, setActiveCategory] = useState(1);

  const changeCategory = (category) => {
    const isSearchParamsExist = searchParams.has("search");
    setActiveCategory(category.id);

    if (isSearchParamsExist) {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  };

  console.log(
    "categoryList.categories.filter(category=>category.id===activeCategory)",
    categoryList.categories.filter(
      (category) => category.id === activeCategory
    )[0].id
  );

  useEffect(() => {
    console.log("activeCategory", activeCategory);
    if (activeCategory === 1) {
      setFilteredProducts(data.products);
    } else {
      const filteredByCategory = data.products.filter((product) =>
        product.categories.find((category) => category.id === activeCategory)
      );
      setFilteredProducts(filteredByCategory);
    }
    if (searchText?.length >= 3) {
      const result = data.products.filter((product) => {
        return (
          product.title?.toLowerCase().includes(searchText?.toLowerCase()) &&
          product
        );
      });
      setFilteredProducts(result);
    }
  }, [searchText, activeCategory]);

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Breadcrumb
            categories={[
              ...categories,
              {
                title: categoryList.categories.filter(
                  (category) => category.id === activeCategory
                )[0].title,
              },
            ]}
          />
          <CategorySection
            activeCategory={activeCategory}
            changeCategory={changeCategory}
          />
          <ProductList filteredProducts={filteredProducts} />
        </div>
        <Campaigns />
      </main>
      <Footer/>
    </>
  );
}

export default App;
