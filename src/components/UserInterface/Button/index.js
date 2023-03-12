import './style.scss';
import Icon from '../../Icon';

const Button = ({
  className,
  text,
  color,
  icon,
  onClick,
  ...props
}) => {

  return (
    <button
    className={`btn btn-${color} ${className}`}
    onClick={onClick}
      {...props}
    >
      {icon && <Icon iconName={icon} />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
