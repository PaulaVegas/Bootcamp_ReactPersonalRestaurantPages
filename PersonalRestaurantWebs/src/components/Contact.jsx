import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    if (name.trim().length < 3) {
      setError('Name must be at least 3 characters long')
      return
    }

    const formData = { name, email }
    localStorage.setItem('contactData', JSON.stringify(formData))
    navigate('/')
  }

  return (
    <section className='form-container'>
      <div className='form'>  
        <h2>Contact</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
    <button className='button' type="submit">Send</button>      
    </form>
    </div>
    </section>
  )
}