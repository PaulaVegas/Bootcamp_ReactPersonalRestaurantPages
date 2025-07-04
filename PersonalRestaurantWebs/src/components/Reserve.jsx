import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Reserve() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    people: 1,
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('reservation', JSON.stringify(formData))
    navigate('/')
  }

  return (
    <div>
      <h2>Reserve your table</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required />
        </label>
        <br/>
        <label>
          Date:
          <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required />
        </label>
        <br/>
        <label>
          Number of people:
          <input 
            type="number" 
            name="people" 
            min="1" 
            value={formData.people} 
            onChange={handleChange} 
            required />
        </label>
        <br/>
        <button type="submit">Reserve</button>
      </form>
    </div>
  )
}

export default Reserve