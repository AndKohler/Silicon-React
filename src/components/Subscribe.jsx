import React, { useState } from 'react'

function Subscribe() {

  const [ formData, setFormData ] = useState({ email: '' })
  const [ errors, setErrors ] = useState({})
  const [ submitted, setSubmitted ] = useState(false)

  const emailPattern = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: `A valid ${name} is required to subscribe.`}))
    } else if (name === 'email' && !emailPattern.test(value)) {
      setErrors(prevErrors => ({...prevErrors, [name]: 'Please enter a valid email address.'}))
    } else {
      setErrors(prevErrors => ({...prevErrors, [name]: ''}))
    }
  }

  const handleOk = () => {
    setSubmitted(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    const newErrors = {}

    if (formData.email.trim() === '') {
      newErrors.email = 'A valid email is required to subscribe.'
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
  
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  
    if (res.ok) {
      setSubmitted(true)
      setFormData({ email: '' })
    }
  }

  if (submitted) {
    return (
      <div className='informationbox'>
        <h1>Thank you for subscribing!</h1>
        <button className='informationbox-btn' onClick={handleOk}>Ok</button>
      </div>
    )
  }

  return (
    <div className="subscribe-container">
      <div className="subscribe-title">
        <img src="/notification.svg" alt="notification-bell" />
        <h1>Subscribe to our newsletter to stay informed about latest updates</h1>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="subscribe-email">
          <div className='form-group'>
            <input 
              className="text-input" 
              type="email" 
              name='email' 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="Your Email" 
            />
            <span className='testing'>{errors.email && errors.email}</span>
          </div>
          <button className="subButton" type='submit'>Subscribe</button>
        </div>
      </form>
    </div>
  )
}

export default Subscribe
