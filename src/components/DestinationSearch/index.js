import {useState} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

const DestinationSearch = ({destinationsList}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  // Filter destinations based on inputValue, case-insensitive
  const filteredDestinations = destinationsList.filter(destination =>
    destination.name.toLowerCase().includes(inputValue.toLowerCase()),
  )

  return (
    <div className="bg-container">
      <h1>Destination Search</h1>

      {/* Search input container */}
      <div className="input-container">
        <input
          type="search"
          placeholder="Search..."
          onChange={handleInputChange}
          value={inputValue}
          className="input-with-icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="search-icon"
        />
      </div>

      {/* Pass filteredDestinations to DestinationItem */}
      <DestinationItem filteredDestinations={filteredDestinations} />
    </div>
  )
}

export default DestinationSearch
