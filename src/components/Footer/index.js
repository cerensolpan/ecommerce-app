import "./styles.scss";
import FooterApps from "./FooterApps";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FooterApps />
        <FooterMenu />
        <div className="footer__description">
          Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi
          mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi”
          Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek
          gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz
          Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze
          çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından
          beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş
          verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu
          günlerinde onların sevincine ortak olmak için yapmanız gereken sadece
          birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler
          Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood
          ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin
          adresi; ÇiçekSepeti.
        </div>
      </div>
      <div className="footer__copyright">
        Copyright &copy; {new Date().getFullYear()} Çiçek Sepeti İnternet
        Hizmetleri A.Ş
      </div>
    </footer>
  );
};

export default Footer;
