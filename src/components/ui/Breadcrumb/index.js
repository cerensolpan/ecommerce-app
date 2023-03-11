import "./style.scss";

export const Breadcrumb = ({ categories }) => {
  return (
    <div className="breadcrumb">
      {categories.map((category, idx) => {
        return (
          <div className="breadcrumb-item" href={category.href} key={idx}>
            {category.title}
            {idx < categories.length - 1 && (
              <span className="breadcrumb-bracket">{">"}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
