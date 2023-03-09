import { ReactComponent as Attention } from '../assets/icons/attention.svg';
import { ReactComponent as Basket } from '../assets/icons/basket.svg';
import { ReactComponent as ChevronDown } from '../assets/icons/chevron-down.svg';
import { ReactComponent as ChevronUp } from '../assets/icons/chevron-up.svg';
import { ReactComponent as CsBlog } from '../assets/icons/cs-blog.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as Leaf } from '../assets/icons/leaf.svg';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as Menu } from '../assets/icons/menu.svg';
import { ReactComponent as Minus } from '../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';
import { ReactComponent as Youtube } from '../assets/icons/youtube.svg';

const Icon = ({ iconName, ...props }) => {
  const icons = {
    attention: Attention,
    basket: Basket,
    chevronDown: ChevronDown,
    chevronUp: ChevronUp,
    csBlog: CsBlog,
    facebook: Facebook,
    instagram: Instagram,
    leaf: Leaf,
    logo: Logo,
    menu: Menu,
    minus: Minus,
    plus: Plus,
    search: Search,
    twitter: Twitter,
    youtube: Youtube
  };


  let Icon = icons[iconName];
  return Icon && <Icon {...props} />;
};

export default Icon;
