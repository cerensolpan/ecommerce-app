import Icon from '../Icon';
import {footerMenu} from './footerMenuData';
import FooterMenuResponsive from './FooterMenuResponsive';

const footerSocialMedia = [
  {
    name: 'facebook',
    link: 'https://www.facebook.com/ciceksepeti'
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/ciceksepeti'
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/ciceksepeti/'
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/user/CicekSepeti'
  },
  {
    name: 'blog',
    link: 'https://blog.ciceksepeti.com/'
  }
];

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <div className="footer-menu-social">
        <Icon className="footer-menu-social-logo" iconName="logo" />

        <ul className="footer-menu-social-menu">
          {footerSocialMedia.map((social) => (
            <li key={social.name}>
              <a href={social.link} target="_blank" rel="noreferrer">
                <Icon iconName={social.name} />
              </a>
            </li>
          ))}
        </ul>

        <div className="footer-menu-social-menu-text">
          CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz.
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
          oluşturduğumuz aydınlatma metnine <a href="/">buradan</a>{' '}
          ulaşabilirsiniz.
        </div>
      </div>
      <div className="footer-menu-menu">
        <ul className="footer-menu-menu-list">
          {footerMenu.map((menu, index) => (
            <li key={`${menu.title}__${index}`}>
              <h3 className="footer-menu-menu-list-title">{menu.title}</h3>
              <ul className="footer-menu-menu-list-items">
                {menu.items.map((item, index) => (
                  <li key={`${item.title}__${index}`}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <FooterMenuResponsive />
    </div>
  );
};

export default FooterMenu;
