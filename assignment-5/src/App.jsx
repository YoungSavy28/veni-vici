// src/App.jsx
import { useState, useEffect } from 'react'
import './index.css'

const API_KEY = import.meta.env.VITE_DOG_API_KEY
const API_URL = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'

function App() {
  const [dog, setDog] = useState(null)
  const [banList, setBanList] = useState([])

  const fetchDog = async () => {
    try {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      })

      const response = await fetch(API_URL, {
        method: 'GET',
        headers,
        redirect: 'follow'
      })

      const data = await response.json()
      const breed = data[0].breeds[0]

      const isBanned = banList.some(banned =>
        [breed.name, breed.origin, breed.life_span].includes(banned)
      )

      if (!isBanned) {
        setDog({
          image: data[0].url,
          name: breed.name,
          weight: breed.weight.imperial + ' lbs',
          origin: breed.origin || 'Unknown',
          lifeSpan: breed.life_span
        })
      } else {
        fetchDog() // retry
      }
    } catch (err) {
      console.error('Error fetching dog:', err)
    }
  }

  useEffect(() => {
    fetchDog()
  }, [])

  const addToBanList = (attribute) => {
    if (!banList.includes(attribute)) {
      setBanList([...banList, attribute])
    }
  }

  return (
    <div className="container">
      <h1>Veni Vici!</h1>
      <p>Discover dogs from your wildest dreams 🐶✨</p>

      {dog && (
        <div className="card">
          <h2>{dog.name}</h2>
          <div className="attributes">
            <button onClick={() => addToBanList(dog.origin)}>{dog.origin}</button>
            <button onClick={() => addToBanList(dog.weight)}>{dog.weight}</button>
            <button onClick={() => addToBanList(dog.lifeSpan)}>{dog.lifeSpan}</button>
          </div>
          <img src={dog.image} alt={dog.name} />
        </div>
      )}

      <button className="discover-btn" onClick={fetchDog}>Discover!</button>

      <div className="ban-list">
        <h3>Ban List:</h3>
        {banList.map((item, idx) => (
          <span key={idx} className="ban-item">{item}</span>
        ))}
      </div>
    </div>
  )
}

export default App
