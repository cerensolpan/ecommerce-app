import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import basket from "../../assets/icons/basket.svg";
import Button from "../Ui/Button";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} width={163} height={31} alt="logo" />
      <Button size="sm" color="primary">
        <img src={basket} width={23} height={23} alt="basket" />
        Sepetim
      </Button>
    </div>
  );
}
