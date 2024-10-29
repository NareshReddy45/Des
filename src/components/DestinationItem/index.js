import './index.css'

const DestinationItem = ({filteredDestinations}) => (
  <ul className="destination-list">
    {filteredDestinations.map(item => (
      <li key={item.id} className="destination-item">
        <img src={item.imgUrl} alt={item.name} className="image" />
        <p className="heading">{item.name}</p>
      </li>
    ))}
  </ul>
)

export default DestinationItem
