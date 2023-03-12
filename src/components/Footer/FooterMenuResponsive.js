import { useState } from 'react';
import Icon from '../Icon';
import {footerMenu} from './footerMenuData';

const FooterMenuResponsive = () => {
  const [menus, setMenus] = useState([...footerMenu]);

  const accordionOnClick = (index) => {
    const menu = [...menus].map((item, i) => {
      if (index === i) {
        return { ...item, active: !item.active };
      } else {
        return { ...item, active: false };
      }
    });

    setMenus(menu);
  };
  return (
    <div className="footer-menu-responsive">
      {menus.map((menu, index) => (
        <div
          className={`footer-menu-responsive-item ${
            menu.active ? '--active' : ''
          }`}
          key={index}
        >
          <div
            className="footer-menu-responsive-item-title"
            onClick={() => accordionOnClick(index)}
          >
            <h3>{menu.title}</h3>
            <Icon name={`${menu.active ? 'chevronUp' : 'chevronDown'}`} />
          </div>
          <ul className="footer-menu-responsive-list">
            {menu.items.map((item, index) => (
              <li key={index} className="mt-2">
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterMenuResponsive;
