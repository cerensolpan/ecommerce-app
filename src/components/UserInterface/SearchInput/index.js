import "./style.scss";
import Icon from "../../Icon";
import Button from "../Button";

const SearchInput = ({
  icon,
  button,
  placeholder,
  onChange,
  onClick,
  onKeyDown,
  ...props
}) => {
  return (
    <div className="input-group">
      {icon && <Icon iconName="search" />}
      <input
        className="input-group-search"
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        {...props}
      />
      <Button
        text="Ara"
        color='green'
        className="input-group-btn"
        onClick={onClick}
      />
    </div>
  );
};

export default SearchInput;
