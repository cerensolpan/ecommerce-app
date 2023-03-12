import './style.scss';

const campaigns =[
    {
      id: 1,
      image: 'bike.png',
      title: '75 TL Üzerine Teslimat Ücreti Bizden',
      link: '/',
      button_text: 'Detaylı Bilgi',
      background: '--pink',
    },
    {
      id: 2,
      image: 'package.png',
      title: 'Hediye Kategorisi için Sepette %15 İndirim',
      link: '/',
      button_text: 'Hediye Ürünleri',
      background: '--blue-100',
    },
    {
      id: 3,
      image: 'paper.png',
      title: 'Kırtasiye Kategorisi için Sepette %15 İndirim',
      link: '/',
      button_text: 'Detaylı Bilgi',
      background: '--green-100',
    }
  ];

const Campaigns = () => {
  return (
    <div className="campaign">
      <div className="campaign-wrapper container">
        {campaigns.map((campaign) => (
          <div
            className="campaign-box"
            style={{ backgroundColor: `var(${campaign.background})` }}
            key={campaign.id}
          >
            <img
              src={require(`../../assets/images/${campaign.image}`)}
              alt={campaign.id}
            />
            <div className="campaign-box-content">
              <p>{campaign.title}</p>
              <a href={campaign.button_link}>{campaign.button_text}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
