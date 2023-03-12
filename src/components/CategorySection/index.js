import './style.scss';
import data from "../../categories.json"

import Icon from '../Icon';
import { Button } from '../ui/Button';

const CategorySection = ({activeCategory,changeCategory}) => {

  return (
    <section className="filtersection">
      <div className="filter-title">
        <Icon iconName="menu" />
        <h2 className="filter-category">Kategoriler</h2>
      </div>

      <div className="filter-tabs">
      {data.categories.map((category) => {
        return (
          <Button
            className={`filter-button btn-transparent ${
              activeCategory === category.id
                ? 'filter-button-active'
                : ''
            }`}
            key={category.id}
            onClick={()=>changeCategory(category)}
            text={category.title}
          />
        );
      })}
    </div>
    </section>
  );
};

export default CategorySection;
