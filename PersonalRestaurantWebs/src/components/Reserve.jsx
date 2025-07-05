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
    const today = new Date().toISOString().split('T')[0]
    if (formData.date < today) {
    alert(`We unfortunately cannot reserve a table in the past. Please select a valid date.`)
    return
    }
    if (formData.people < 1 || formData.people > 10) {
      alert(`We can't reserve a table for that many people. Please contact us directly for larger parties.`)
      return
    }
    localStorage.setItem('reservation', JSON.stringify(formData))
    navigate('/')
  }

  return (
    <section className="form-container">
      <div className="form">
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
        <button className="button" type="submit">Reserve</button>   
      </form>
      </div>
      
    </section>
  )
}

export default Reserve