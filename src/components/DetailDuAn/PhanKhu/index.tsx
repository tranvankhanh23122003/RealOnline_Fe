import './style.css'
interface CardData {
    id: number;
    image: string;
    area: string;
    project: string;
    style: string;
    type: string;
  }
  
  export default function PhanKhu({ cards }: { cards: CardData[] }) {
    return (
      <div className="inform-card">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <p className="light-text">Phân khu</p>
            <p className="bold-text">{card.area}</p>
            <img src={card.image} alt={`Card ${card.id}`} className="card-image" />
            <p className="light-text">Dự án</p>
            <p className="bold-text">{card.project}</p>
            <p className="light-text">Phong cách xây dựng</p>
            <p className="bold-text">{card.style}</p>
            <p className="light-text">Loại hình</p>
            <p className="bold-text">{card.type}</p>
            <button className="detail-btn">Xem chi tiết</button>
          </div>
        ))}
      </div>
    );
  }
  